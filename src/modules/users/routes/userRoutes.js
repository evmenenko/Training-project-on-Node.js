const userController = require('../controllers/UserController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.post('/user/search', /* isAutenticated, */ userController.readByFirstAndLastName);
  router.get('/user/:id', /* isAutenticated, */ userController.readById);
  router.post('/user/:id', /* isAutenticated, */ userController.update);
  router.delete('/user/:id', /* isAutenticated, */ userController.destroy);
  router.get('/user', /* isAutenticated, */ userController.readAll);
  router.post('/user', /* isAutenticated, */ userController.create);
}