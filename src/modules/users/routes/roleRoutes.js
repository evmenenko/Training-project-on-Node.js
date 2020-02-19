const roleController = require('../controllers/RoleController');
const filters = require('../../../middleware/filters');
const schemas = require('./schemas/roleSchemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {
  router.get('/role/:id', filters.isAdmin, validate(schemas.getById), roleController.readById);
  router.post('/role/:id', filters.isAdmin, validate(schemas.update), roleController.update);
  router.delete('/role/:id', filters.isAdmin, validate(schemas.deleteById), roleController.destroy);
  router.get('/role', filters.isAdmin, roleController.readAll);
  router.post('/role', filters.isAdmin, validate(schemas.create), roleController.create);
}