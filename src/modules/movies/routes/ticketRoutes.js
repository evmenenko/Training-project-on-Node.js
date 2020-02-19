const ticketController = require('../controllers/TicketController');
const filters = require('../../../middleware/filters');
const schemas = require('../../../schemas');
const validate = require('../../../classes/Validator').validate;

module.exports = (router) => {

  router.delete(
    '/ticket/order/display/:id',
    filters.isUser,
    validate({ params: schemas.id }),
    ticketController.cancelTicket
  );
  
  router.post(
    '/ticket/order',
    filters.isUser,
    validate({ body: schemas.ticket.displayIdSchema }),
    ticketController.orderTicket
  );

  router.get(
    '/ticket/order',
    async (ctx, next) => {
      if (ctx.query.userId) await filters.isAdmin(ctx, next);
      else await next();
    },
    validate({ query: [ schemas.ticket.userIdSchema, schemas.pagination ] }),
    ticketController.readByUserId
  );

  router.get(
    '/ticket/movie/:id',
    filters.isAdmin,
    validate({
      params: schemas.id,
      query: schemas.pagination,
    }),
    ticketController.readByMovieId
  );

  router.get(
    '/ticket/:id',
    filters.isAdmin,
    validate({ params: schemas.id }),
    ticketController.readById
  );

  router.get(
    '/ticket',
    filters.isAdmin,
    validate({ query: schemas.pagination }),
    ticketController.readAll
  );
}