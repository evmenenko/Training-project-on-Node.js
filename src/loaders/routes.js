const usersRoutes = require('../modules/users/routes');
const moviesRoutes = require('../modules/movies/routes');
const authRoutes = require('../modules/auth/authRoutes');

const Router = require('koa-router');
const router = new Router();

module.exports = (app) => {

  authRoutes(router);
  usersRoutes(router);
  moviesRoutes(router);

  app.use(router.routes());
  app.use(router.allowedMethods());
}