const initKoa = require('./koa');
const initMiddleware = require('./middleware');
const initRoutes = require('./routes');
const initSessions = require('./sessions');
const notFoundHandler = require('../middleware/notFoundHandler');
const errorHandler = require('../middleware/errorHandler');
const initCron = require('../scripts/cron');

module.exports = async (app) => {
  app.use(errorHandler);
  initKoa(app);
  initSessions(app);
  initMiddleware(app);
  initRoutes(app);
  app.use(notFoundHandler);
  // initCron();
}