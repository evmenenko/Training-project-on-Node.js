const roleController = require('../controllers/RoleController');
const filters = require('../../../middleware/filters');
const validators = require('./validators/roleValidators');

module.exports = (router) => {
  router.get('/role/:id', filters.isAdmin, validators.validateId, roleController.readById);
  router.post('/role/:id', filters.isAdmin, validators.validateUpdatedRole, roleController.update);
  router.delete('/role/:id', filters.isAdmin, validators.validateId, roleController.destroy);
  router.get('/role', filters.isAdmin, roleController.readAll);
  router.post('/role', filters.isAdmin, validators.validateName, roleController.create);
}