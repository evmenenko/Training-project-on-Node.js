const movieController = require('../controllers/MovieController');
const tagController = require('../controllers/TagController');

module.exports = (router) => {
  router.post('/movie/search', movieController.readByTags);
  router.get('/movie/:id', movieController.readById);
  router.post('/movie/:id', movieController.update, tagController.addTags);
  router.delete('/movie/:id', movieController.destroy);
  router.get('/movie', movieController.readAll);
  router.post('/movie', movieController.create, tagController.addTags);
}