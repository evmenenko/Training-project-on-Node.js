const controlPointController = require('../controllers/ControlPointController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.get('/controlPoint/:id', /* isAutenticated, */ controlPointController.readById);
  router.post('/controlPoint/:id', /* isAutenticated, */ controlPointController.update);
  router.delete('/controlPoint/:id', /* isAutenticated, */ controlPointController.destroy);
  router.get('/controlPoint', /* isAutenticated, */ controlPointController.readAll);
  router.post('/controlPoint', /* isAutenticated, */ controlPointController.create);
}