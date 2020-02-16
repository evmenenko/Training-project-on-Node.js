const movieController = require('../controllers/MovieController');
const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');
const validators = require('./validators/movieValidators');

module.exports = (router) => {
  router.get('/movie/search/tags', validators.validateTagIds, movieController.readByTags);
  router.get('/movie/:id', validators.validateId, movieController.readById);
  router.post('/movie/:id', filters.isAdmin, validators.validateUpdatedMovie, movieController.update, tagController.addTags);
  router.delete('/movie/:id', filters.isAdmin, validators.validateId, movieController.destroy);
  router.get('/movie', movieController.readAll);
  router.post('/movie', filters.isAdmin, validators.validateCreatedMovie, movieController.create, tagController.addTags);
}