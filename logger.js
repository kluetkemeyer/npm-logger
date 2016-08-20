

var ErrorLevel = {
	ERROR:				1,
	WARNING:			2,
	NOTICE:				4,
	MESSAGE:			8
};

var Logger = function(pModule) {
	this.module_ = pModule;
};


var _createLevelFunction = function(lvl) {
	return function(section, msg) {
		var params = [lvl];
		for(var i=0, l=arguments.length; i<l; ++i) {
			params.push(arguments[i]);
		}
		
		this._msg.apply(this, params);
	}
};

Logger.prototype._msg = function(lvl, section, msg) {
	var prefix = ([0, 'E', 'W', 0, 'N', 0, 0, 0, 'M'])[lvl] || '!';
	
	
	var params = ['[' + prefix + ' - ' + this.module_ + '.' + section + ']'];
	if (arguments.length >=3) {
		for(var i=2, l=arguments.length; i<l; ++i) {
			params.push(arguments[i]);
		}
	}
	
	console.log.apply(console, params);
}

Logger.prototype.error = _createLevelFunction(ErrorLevel.ERROR);
Logger.prototype.warning = _createLevelFunction(ErrorLevel.WARNING);
Logger.prototype.notice = _createLevelFunction(ErrorLevel.NOTICE);
Logger.prototype.message = _createLevelFunction(ErrorLevel.MESSAGE);


exports.ErrorLevel = ErrorLevel;
exports.Logger = Logger;