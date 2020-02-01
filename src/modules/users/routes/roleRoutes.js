const roleController = require('../controllers/RoleController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.get('/role/:id', /* isAutenticated, */ roleController.readById);
  router.post('/role/:id', /* isAutenticated, */ roleController.update);
  router.delete('/role/:id', /* isAutenticated, */ roleController.destroy);
  router.get('/role', /* isAutenticated, */ roleController.readAll);
  router.post('/role', /* isAutenticated, */ roleController.create);
}