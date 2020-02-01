const tagController = require('../controllers/TagController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.get('/tag/:id', /* isAutenticated, */ tagController.readById);
  router.post('/tag/:id', /* isAutenticated, */ tagController.update);
  router.delete('/tag/:id', /* isAutenticated, */ tagController.destroy);
  router.get('/tag', /* isAutenticated, */ tagController.readAll);
  router.post('/tag', /* isAutenticated, */ tagController.create);
}