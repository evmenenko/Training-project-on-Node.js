const userController = require('../controllers/UserController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.post('/user/name', userController.changeName);
  router.post('/user/password', userController.changePassword);
  // просмотр всех пользователей админом и только себя текущим пользователем (и вообще нужен ли)?
  router.get('/user/:id', filters.isAdmin, userController.readById);
  router.post('/user/:id', filters.isAdmin, userController.update);
  router.delete('/user/:id', filters.isAdmin, userController.destroy);
  router.get('/user', filters.isAdmin, userController.readAll);
  router.post('/user', filters.isAdmin, userController.create);
}