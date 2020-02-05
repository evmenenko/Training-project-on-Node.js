const roleController = require('../controllers/RoleController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/role/:id', filters.adminFilter, roleController.readById);
  router.post('/role/:id', filters.adminFilter, roleController.update);
  router.delete('/role/:id', filters.adminFilter, roleController.destroy);
  router.get('/role', filters.adminFilter, roleController.readAll);
  router.post('/role', filters.adminFilter, roleController.create);
}