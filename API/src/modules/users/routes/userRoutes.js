const userController = require('../controllers/UserController');
const filters = require('../../../middleware/filters');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {

  router.post(
    '/user/name',
    validate({ body: schemas.user.nameSchema }),
    userController.changeName
  );

  router.get(
    '/user/name',
    validate({ query: [ schemas.user.nameSchema, schemas.pagination ] }),
    userController.readByName
  );

  router.post(
    '/user/password',
    validate({ body: schemas.user.passwordsSchema }),
    userController.changePassword
  );

  router.get(
    '/user/:id',
    filters.isAdmin,
    validate({ params: schemas.id }),
    userController.readById
  );

  router.post(
    '/user/:id',
    filters.isAdmin,
    validate({
      params: schemas.id,
      body: schemas.user.userSchema,
    }),
    userController.update
  );
  
  router.delete(
    '/user/:id',
    validate({ params: schemas.id }),
    userController.destroy
  );

  router.get(
    '/user',
    filters.isAdmin,
    validate({ query: schemas.pagination }),
    userController.readAll
  );

  router.post(
    '/user',
    filters.isAdmin,
    validate({ body: schemas.user.userSchema }),
    userController.create
  );
}