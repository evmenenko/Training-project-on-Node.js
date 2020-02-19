const requestController = require('../controllers/requestController');
const filters = require('../../../middleware/filters');
const schemas = require('./schemas/requestSchemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {
  router.get('/request/:id', filters.isAdmin, validate(schemas.getById), requestController.readById);
  router.delete('/request', filters.isUser, requestController.destroy);
  router.get('/request', filters.isAdmin, requestController.readAll);
  router.post('/request', filters.isUser, requestController.create);
}