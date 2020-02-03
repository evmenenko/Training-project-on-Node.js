const userController = require('../controllers/UserController');

module.exports = (router) => {
  router.post('/user/search/:pageNumber&:recordsAmount', userController.readByFirstAndLastName);
  // не совсем уверен, в каком виде роут для пагинации делать, так что пока так
  router.get('/user/:pageNumber&:recordsAmount', userController.readAll);
  router.get('/user/:id', userController.readById);
  router.post('/user/:id', userController.update);
  router.delete('/user/:id', userController.destroy);
  router.post('/user', userController.create);
}