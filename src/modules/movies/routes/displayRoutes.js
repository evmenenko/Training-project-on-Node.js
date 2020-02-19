const displayController = require('../controllers/DisplayController');
const filters = require('../../../middleware/filters');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {

  router.get(
    '/display/:id',
    validate({ params: schemas.id }),
    displayController.readById
  );

  router.post(
    '/display/:id',
    filters.isAdmin,
    validate({
      params: schemas.id,
      body: schemas.display.displaySchema,
    }),
    displayController.update
  );

  router.delete(
    '/display/:id',
    filters.isAdmin,
    validate({ params: schemas.id }),
    displayController.destroy
  );

  router.get(
    '/display',
    validate({ query: schemas.pagination }),
    displayController.readAll
  );

  router.post(
    '/display',
    filters.isAdmin,
    validate({ body: schemas.display.displaySchema }),
    displayController.create
  );
}