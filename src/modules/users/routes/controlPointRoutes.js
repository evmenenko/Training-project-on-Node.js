const controlPointController = require('../controllers/ControlPointController');

module.exports = (router) => {
  router.get('/controlPoint/:id', controlPointController.readById);
  router.post('/controlPoint/:id', controlPointController.update);
  router.delete('/controlPoint/:id', controlPointController.destroy);
  router.get('/controlPoint', controlPointController.readAll);
  router.post('/controlPoint', controlPointController.create);
}