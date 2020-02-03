const ticketController = require('../controllers/TicketController');

module.exports = (router) => {
  router.get('/ticket/:id', ticketController.readById);
  router.delete('/ticket/:id', ticketController.destroy);
  router.get('/ticket', ticketController.readAll);
}