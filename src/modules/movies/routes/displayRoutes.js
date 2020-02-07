const displayController = require('../controllers/DisplayController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/display/:id', displayController.readById);
  router.post('/display/:id', filters.isAdmin, displayController.update);
  router.delete('/display/:id', filters.isAdmin, displayController.destroy);
  router.get('/display', displayController.readAll);
  router.post('/display', filters.isAdmin, displayController.create);
}