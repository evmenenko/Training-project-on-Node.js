const displayController = require('../controllers/DisplayController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/display/:id', displayController.readById);
  router.post('/display/:id', filters.adminFilter, displayController.update);
  router.delete('/display/:id', filters.adminFilter, displayController.destroy);
  router.get('/display', displayController.readAll);
  router.post('/display', filters.adminFilter, displayController.create);
}