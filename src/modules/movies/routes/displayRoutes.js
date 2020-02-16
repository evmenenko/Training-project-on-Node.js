const displayController = require('../controllers/DisplayController');
const filters = require('../../../middleware/filters');
const validators = require('./validators/displayValidators');

module.exports = (router) => {
  router.get('/display/:id', validators.validateId, displayController.readById);
  router.post('/display/:id', filters.isAdmin, validators.validateUpdatedDisplay, displayController.update);
  router.delete('/display/:id', filters.isAdmin, validators.validateId, displayController.destroy);
  router.get('/display', displayController.readAll);
  router.post('/display', filters.isAdmin, validators.validateCreatedDisplay, displayController.create);
}