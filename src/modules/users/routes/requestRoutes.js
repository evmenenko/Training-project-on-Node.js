const requestController = require('../controllers/requestController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/request/:id', filters.isAdmin, requestController.readById);
  // можно ли отмененить заявку на удаление?
  router.delete('/request/:id', requestController.destroy);
  router.get('/request', filters.isAdmin, requestController.readAll);
  router.post('/request', filters.isUser, requestController.create);
}