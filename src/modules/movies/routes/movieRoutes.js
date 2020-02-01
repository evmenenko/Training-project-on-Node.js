const movieController = require('../controllers/MovieController');
const tagController = require('../controllers/TagController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.get('/movie/:id', /* isAutenticated, */ movieController.readById);
  router.post('/movie/:id', /* isAutenticated, */ movieController.update, tagController.addTags);
  router.delete('/movie/:id', /* isAutenticated, */ movieController.destroy);
  router.get('/movie', /* isAutenticated, */ movieController.readAll);
  router.post('/movie', /* isAutenticated, */ movieController.create, tagController.addTags);
}