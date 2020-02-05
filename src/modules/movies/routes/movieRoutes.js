const movieController = require('../controllers/MovieController');
const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.get('/movie/:id', movieController.readById);
  router.post('/movie/:id', filters.adminFilter, movieController.update, tagController.addTags);
  router.delete('/movie/:id', filters.adminFilter, movieController.destroy);
  router.get('/movie', movieController.readAll);
  router.post('/movie', filters.adminFilter, movieController.create, tagController.addTags);
}