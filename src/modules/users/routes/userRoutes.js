const userController = require('../controllers/UserController');
const filters = require('../../../middleware/filters');
const schemas = require('./schemas/userSchemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {

  router.post('/user/name', validate(schemas.changeName), userController.changeName);
  router.get('/user/name', validate(schemas.getByName), userController.readByName);
  router.post('/user/password', validate(schemas.changePassword), userController.changePassword);
  router.get('/user/:id', filters.isAdmin, validate(schemas.getById), userController.readById);
  router.post('/user/:id', filters.isAdmin, validate(schemas.update), userController.update);
  router.delete('/user/:id', validate(schemas.deleteById), userController.destroy);
  router.get('/user', filters.isAdmin, validate(schemas.getAll), userController.readAll);
  router.post('/user', filters.isAdmin, validate(schemas.create), userController.create);
}