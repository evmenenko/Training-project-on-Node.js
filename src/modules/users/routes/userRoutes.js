const userController = require('../controllers/UserController');
const filters = require('../../../middleware/filters');
const validators = require('./validators/userValidators');

module.exports = (router) => {

  router.post('/user/name', validators.validateName, userController.changeName);
  router.get('/user/name', userController.readByName);
  router.post('/user/password', validators.validatePasswords, userController.changePassword);
  router.get('/user/:id', filters.isAdmin, validators.validateId, userController.readById);
  router.post('/user/:id', filters.isAdmin, validators.validateUpdatedUser, userController.update);
  router.delete('/user/:id', validators.validateId, userController.destroy);
  router.get('/user', filters.isAdmin, userController.readAll);
  router.post('/user', filters.isAdmin, validators.validateCreatedUser,  userController.create);
}