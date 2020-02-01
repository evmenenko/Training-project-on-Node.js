const requestController = require('../controllers/requestController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.get('/request/:id', /* isAutenticated, */ requestController.readById);
  router.delete('/request/:id', /* isAutenticated, */ requestController.destroy);
  router.get('/request', /* isAutenticated, */ requestController.readAll);
  router.post('/request', /* isAutenticated, */ requestController.create);
}