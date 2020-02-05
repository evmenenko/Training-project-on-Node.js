const requestController = require('../controllers/requestController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/request/:id', filters.adminFilter, requestController.readById);
  // можно ли отмененить заявку на удаление?
  router.delete('/request/:id', requestController.destroy);
  router.get('/request', filters.adminFilter, requestController.readAll);
  router.post('/request', filters.userFilter, requestController.create);
}