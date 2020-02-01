const initKoa = require('./koa');
const initMiddleware = require('./middleware');
const initRoutes = require('./routes');
const initSessions = require('./sessions');
const notFoundHandler = require('../middleware/notFoundHandler');

module.exports = (app) => {
  initMiddleware(app);
  initKoa(app);
  initSessions(app);
  initRoutes(app);
  app.use(notFoundHandler)
}