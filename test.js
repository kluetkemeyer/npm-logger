var logger = require('./logger.js');


var logModule = new logger.Logger('Hello');

logModule.error('World', 'err');
