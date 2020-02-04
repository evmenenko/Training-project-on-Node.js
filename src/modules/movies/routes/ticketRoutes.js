const ticketController = require('../controllers/TicketController');

module.exports = (router) => {
  router.delete('/ticket/order/:displayId', ticketController.cancelTicket);
  router.post('/ticket/order', ticketController.orderTicket);
  router.get('/ticket/:id', ticketController.readById);
  router.delete('/ticket/:id', ticketController.destroy);
  router.get('/ticket', ticketController.readAll);
  router.post('/ticket', ticketController.create);
}