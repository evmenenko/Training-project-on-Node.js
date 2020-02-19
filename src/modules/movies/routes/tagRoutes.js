const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');
const schemas = require('./schemas/tagSchemas');
const validate = require('../../../classes/Validator').validate;

// нужно ли вообще управлять тегами?
module.exports = (router) => {
  router.get('/tag/:id', filters.isAdmin, validate(schemas.getById), tagController.readById);
  router.post('/tag/:id', filters.isAdmin, validate(schemas.update), tagController.update);
  router.delete('/tag/:id', filters.isAdmin, validate(schemas.deleteById), tagController.destroy);
  router.get('/tag', filters.isAdmin, tagController.readAll);
  router.post('/tag', filters.isAdmin, validate(schemas.create), tagController.create);
}