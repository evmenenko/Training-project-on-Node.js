const ticketController = require('../controllers/TicketController');

const { isAutenticated } = require('../../../loaders/passport');

module.exports = (router) => {
  router.get('/ticket/:id', /* isAutenticated, */ ticketController.readById);
  router.delete('/ticket/:id', /* isAutenticated, */ ticketController.destroy);
  router.get('/ticket', /* isAutenticated, */ ticketController.readAll);
}