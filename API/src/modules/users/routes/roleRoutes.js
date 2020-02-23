const roleController = require('../controllers/RoleController');
const filters = require('../../../middleware/filters');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {

  router.get(
    '/role/:id',
    filters.isAdmin,
    validate({ params: schemas.id }),
    roleController.readById
  );

  router.post(
    '/role/:id',
    filters.isAdmin,
    validate({
      params: schemas.id,
      body: schemas.role.roleSchema,
    }),
    roleController.update
  );

  router.delete(
    '/role/:id',
    filters.isAdmin,
    validate({ params: schemas.id }),
    roleController.destroy
  );

  router.get(
    '/role',
    filters.isAdmin,
    roleController.readAll
  );

  router.post(
    '/role',
    filters.isAdmin,
    validate({ body: schemas.role.roleSchema }),
    roleController.create
  );
}