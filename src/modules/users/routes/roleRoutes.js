const roleController = require('../controllers/RoleController');

module.exports = (router) => {
  router.get('/role/:id', roleController.readById);
  router.post('/role/:id', roleController.update);
  router.delete('/role/:id', roleController.destroy);
  router.get('/role', roleController.readAll);
  router.post('/role', roleController.create);
}