const requestController = require('../controllers/requestController');
const filters = require('../../../middleware/filters');
const validators = require('./validators/requestValidators');

module.exports = (router) => {
  router.get('/request/:id', filters.isAdmin, validators.validateId, requestController.readById);
  router.delete('/request', filters.isUser, requestController.destroy);
  router.get('/request', filters.isAdmin, requestController.readAll);
  router.post('/request', filters.isUser, requestController.create);
}