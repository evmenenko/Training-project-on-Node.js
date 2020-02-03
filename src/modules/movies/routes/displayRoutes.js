const displayController = require('../controllers/DisplayController');

module.exports = (router) => {
  router.get('/display/:id', displayController.readById);
  router.post('/display/:id', displayController.update);
  router.delete('/display/:id', displayController.destroy);
  router.get('/display', displayController.readAll);
  router.post('/display', displayController.create);
}