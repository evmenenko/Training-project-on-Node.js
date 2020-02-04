const { isAutenticated } = require('../../passport');
const authController = require('./AuthController')

module.exports = (router) => {
  
    router.post('/login', authController.login);
    router.post('/register', authController.register);
  
    router.use(isAutenticated);
  
    router.get('/logout', authController.logout);
}