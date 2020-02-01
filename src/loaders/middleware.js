const ErrorHandler = require('../middleware/errorHandler');

module.exports = (app) => {
  app
    .use(ErrorHandler);
}