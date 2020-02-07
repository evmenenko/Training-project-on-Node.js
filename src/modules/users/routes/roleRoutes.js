const roleController = require('../controllers/RoleController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/role/:id', filters.isAdmin, roleController.readById);
  router.post('/role/:id', filters.isAdmin, roleController.update);
  router.delete('/role/:id', filters.isAdmin, roleController.destroy);
  router.get('/role', filters.isAdmin, roleController.readAll);
  router.post('/role', filters.isAdmin, roleController.create);
}