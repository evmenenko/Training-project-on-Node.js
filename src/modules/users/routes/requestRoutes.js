const requestController = require('../controllers/requestController');

module.exports = (router) => {
  router.get('/request/:id', requestController.readById);
  router.delete('/request/:id', requestController.destroy);
  router.get('/request', requestController.readAll);
  router.post('/request', requestController.create);
}