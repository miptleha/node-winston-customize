var logger = require('./logger')(module);

logger.debug('debug info');

logger.log('info', 'Hello distributed log files!');
logger.info('Hello again distributed logs');

logger.log('debug', 'Now my debug messages are written to console!');

logger.profile('test');

logger.info('CHILL WINSTON!', { seriously: true });

logger.profile('test');

logger.error('some error');
