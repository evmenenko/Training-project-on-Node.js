const ticketController = require('../controllers/TicketController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.delete('/ticket/order/:displayId', filters.isUser, ticketController.cancelTicket);
  router.post('/ticket/order', filters.isUser, ticketController.orderTicket);
  router.get('/ticket/:id', ticketController.readById);
  router.delete('/ticket/:id', ticketController.destroy);
  router.get('/ticket', ticketController.readAll);
  router.post('/ticket', ticketController.create);
}