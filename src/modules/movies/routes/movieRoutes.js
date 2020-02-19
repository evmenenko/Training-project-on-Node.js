const movieController = require('../controllers/MovieController');
const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');
const schemas = require('./schemas/movieSchemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {
  router.get('/movie/search/tags', validate(schemas.searchByTags), movieController.readByTags);
  router.get('/movie/:id', validate(schemas.getById), movieController.readById);
  router.post('/movie/:id', filters.isAdmin, validate(schemas.update), movieController.update, tagController.addTags);
  router.delete('/movie/:id', filters.isAdmin, validate(schemas.deleteById), movieController.destroy);
  router.get('/movie', validate(schemas.getAll), movieController.readAll);
  router.post('/movie', filters.isAdmin, validate(schemas.create), movieController.create, tagController.addTags);
}