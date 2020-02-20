const movieController = require('../controllers/MovieController');
const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;
const multer = require('../../../middleware/multer');

module.exports = (router) => {

  router.get(
    '/movie/search/tags',
    validate({ query: [ schemas.movie.tagIdsSchema, schemas.pagination ] }),
    movieController.readByTags
  );

  router.get(
    '/movie/:id',
    validate({ params: schemas.id }),
    movieController.readById
  );

  router.post(
    '/movie/:id',
    filters.isAdmin,
    validate({
      params: schemas.id,
      body: schemas.movie.movieSchema,
    }),
    movieController.update,
    tagController.addTags
  );

  router.delete(
    '/movie/:id',
    filters.isAdmin,
    validate({ params: schemas.id }),
    movieController.destroy
  );

  router.get(
    '/movie',
    validate({ query: schemas.pagination }),
    movieController.readAll
  );

  router.post(
    '/movie',
    filters.isAdmin,
    multer.upload.single('moviePreview'),
    validate({ body: schemas.movie.movieSchema }),
    movieController.create,
    tagController.addTags
  );
}