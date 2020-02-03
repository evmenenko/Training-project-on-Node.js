const tagController = require('../controllers/TagController');

module.exports = (router) => {
  router.get('/tag/:id', tagController.readById);
  router.post('/tag/:id', tagController.update);
  router.delete('/tag/:id', tagController.destroy);
  router.get('/tag', tagController.readAll);
  router.post('/tag', tagController.create);
}