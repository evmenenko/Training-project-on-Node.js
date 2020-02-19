const tagController = require('../controllers/TagController');
const filters = require('../../../middleware/filters');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {

  router.get(
    '/tag/:id',
    filters.isAdmin,
    validate(schemas.getById),
    tagController.readById
  );

  router.post(
    '/tag/:id',
    filters.isAdmin,
    validate({
      params: schemas.id,
      body: schemas.tag.tagSchema,
    }),
    tagController.update
  );

  router.delete(
    '/tag/:id',
    filters.isAdmin,
    validate(schemas.getById),
    tagController.destroy
  );

  router.get(
    '/tag',
    filters.isAdmin,
    tagController.readAll
  );

  router.post(
    '/tag',
    filters.isAdmin,
    validate({ body: schemas.tag.tagSchema }),
    tagController.create
  );
}