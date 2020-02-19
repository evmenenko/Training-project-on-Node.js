const ticketController = require('../controllers/TicketController');
const filters = require('../../../middleware/filters');
const schemas = require('./schemas/ticketSchemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {
  router.delete('/ticket/order/display/:id', filters.isUser, validate(schemas.cancelTicket), ticketController.cancelTicket);
  router.post('/ticket/order', filters.isUser, validate(schemas.orderTicket), ticketController.orderTicket);

  router.get('/ticket/order', async (ctx, next) => {

    if (ctx.query.userId) {
      await filters.isAdmin(ctx, next);
    }
    await next();
    
  }, validate(schemas.getByUserId), ticketController.readByUserId);

  router.get('/ticket/movie/:id', filters.isAdmin, validate(schemas.getByMovieId), ticketController.readByMovieId);
  router.get('/ticket/:id', filters.isAdmin, validate(schemas.getById), ticketController.readById);
  router.get('/ticket', filters.isAdmin, validate(schemas.getAll),ticketController.readAll);
}