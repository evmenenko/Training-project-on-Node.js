const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');
const validators = require('./validators/tagValidators');

// нужно ли вообще управлять тегами?
module.exports = (router) => {
  router.get('/tag/:id', filters.isAdmin, validators.validateId, tagController.readById);
  router.post('/tag/:id', filters.isAdmin, validators.validateUpdatedTag, tagController.update);
  router.delete('/tag/:id', filters.isAdmin, validators.validateId, tagController.destroy);
  router.get('/tag', filters.isAdmin, tagController.readAll);
  router.post('/tag', filters.isAdmin, validators.validateCreatedTag, tagController.create);
}