const { isAuthenticated } = require('../../passport');
const authController = require('./AuthController');
const schemas = require('./authSchemas');
const validate = require('../../classes/Validator').validate;

module.exports = (router) => {
  
    router.post('/login', validate(schemas.login), authController.login);
    router.post('/register', validate(schemas.register), authController.register);
  
    router.use(isAuthenticated);
  
    router.get('/logout', authController.logout);
}