const log4js = require('log4js');

/**
 * @description This module is used to log messages in the cheese file.
 * */

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: {
    default: { appenders: ['cheese'], level: 'error' },
    success: { appenders: ['cheese'], level: 'info' },
  },
});

/**
 * @description This module is used to log messages in the cheese file.
 * */

const logger = log4js.getLogger('cheese');
const success = log4js.getLogger('success');

module.exports = {
  logger,
  success,
};
