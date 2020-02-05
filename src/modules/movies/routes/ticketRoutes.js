const ticketController = require('../controllers/TicketController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.delete('/ticket/order/:displayId', filters.userFilter, ticketController.cancelTicket);
  router.post('/ticket/order', filters.userFilter, ticketController.orderTicket);
  router.get('/ticket/:id', ticketController.readById);
  router.delete('/ticket/:id', ticketController.destroy);
  router.get('/ticket', ticketController.readAll);
  router.post('/ticket', ticketController.create);
}