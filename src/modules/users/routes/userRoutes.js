const userController = require('../controllers/UserController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.post('/user/:id/name', userController.changeName);
  router.post('/user/password', userController.changePassword);
  // просмотр всех пользователей админом и только себя текущим пользователем (и вообще нужен ли)
  router.get('/user/:id', filters.adminFilter, userController.readById);
  router.post('/user/:id', filters.adminFilter, userController.update);
  router.delete('/user/:id', filters.adminFilter, userController.destroy);
  router.get('/user', filters.adminFilter, userController.readAll);
  router.post('/user', filters.adminFilter, userController.create);
}