const displayController = require('../controllers/DisplayController');
const filters = require('../../../middleware/filters');
const schemas = require('./schemas/displaySchemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {
  router.get('/display/:id', validate(schemas.getById), displayController.readById);
  router.post('/display/:id', filters.isAdmin, validate(schemas.update), displayController.update);
  router.delete('/display/:id', filters.isAdmin, validate(schemas.deleteById), displayController.destroy);
  router.get('/display', validate(schemas.getAll), displayController.readAll);
  router.post('/display', filters.isAdmin, validate(schemas.create), displayController.create);
}