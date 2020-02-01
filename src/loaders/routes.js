const usersRouters = require('../modules/users/routes');
const moviesRouters = require('../modules/movies/routes');

const Router = require('koa-router');
const router = new Router();

const { login, logout, register, isAutenticated } = require('./passport');

module.exports = (app) => {
  
  router.post('/login', login);
  router.post('/register', register);
  router.get('/logout', isAutenticated, logout);

  usersRouters(router);
  moviesRouters(router);
  
  app.use(router.routes());
  app.use(router.allowedMethods());
}