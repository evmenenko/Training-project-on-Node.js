const logger = require('../middleware/loggers/mongoLogger');

module.exports = (app) => {
  app
    .use(logger);
}