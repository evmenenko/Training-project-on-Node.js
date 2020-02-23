const { isAuthenticated } = require('../../passport');
const authController = require('./AuthController');
const schemas = require('../../schemas');
const validate = require('../../classes/Validator').validate;

module.exports = (router) => {

  router.post(
    '/login',
    validate({ body: schemas.auth.login }),
    authController.login
  );

  router.post(
    '/register',
    validate({ body: schemas.auth.register }),
    authController.register
  );

  router.use(isAuthenticated);

  router.get('/logout', authController.logout);
}