const movieController = require('../controllers/MovieController');
const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/movie/:id', movieController.readById);
  router.post('/movie/:id', filters.isAdmin, movieController.update, tagController.addTags);
  router.delete('/movie/:id', filters.isAdmin, movieController.destroy);
  router.get('/movie', movieController.readAll);
  router.post('/movie', filters.isAdmin, movieController.create, tagController.addTags);
}