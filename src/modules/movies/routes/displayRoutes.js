const displayController = require('../controllers/DisplayController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.get('/display/:id', /* isAutenticated, */ displayController.readById);
  router.post('/display/:id', /* isAutenticated, */ displayController.update);
  router.delete('/display/:id', /* isAutenticated, */ displayController.destroy);
  router.get('/display', /* isAutenticated, */ displayController.readAll);
  router.post('/display', /* isAutenticated, */ displayController.create);
}