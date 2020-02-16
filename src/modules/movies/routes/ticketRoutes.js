const ticketController = require('../controllers/TicketController');
const filters = require('../../../middleware/filters');
const validators = require('./validators/ticketValidators');

module.exports = (router) => {
  router.delete('/ticket/order/display/:id', filters.isUser, validators.validateId, ticketController.cancelTicket);
  router.post('/ticket/order', filters.isUser, validators.validateCreatedOrder, ticketController.orderTicket);

  router.get('/ticket/order', async (ctx, next) => {

    if (ctx.query.userId) {
      ctx.state.id = ctx.query.userId;
      await filters.isAdmin(ctx, next);
    }

    ctx.state.id = ctx.req.user.id;
    await next();
    
  }, validators.validateUserId, ticketController.readByUserId);

  router.get('/ticket/movie/:id', filters.isAdmin, validators.validateId, ticketController.readByMovieId);
  router.get('/ticket/:id', filters.isAdmin, validators.validateId, ticketController.readById);
  router.get('/ticket', filters.isAdmin, ticketController.readAll);
}