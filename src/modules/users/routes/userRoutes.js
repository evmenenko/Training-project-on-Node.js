const userController = require('../controllers/UserController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.post('/user/search/:pageNumber&:recordsAmount', /* isAutenticated, */ userController.readByFirstAndLastName);
  // не совсем уверен, в каком виде роут для пагинации делать, так что пока так
  router.get('/user/:pageNumber&:recordsAmount', /* isAutenticated, */ userController.readAll);
  router.get('/user/:id', /* isAutenticated, */ userController.readById);
  router.post('/user/:id', /* isAutenticated, */ userController.update);
  router.delete('/user/:id', /* isAutenticated, */ userController.destroy);
  router.post('/user', /* isAutenticated, */ userController.create);
}