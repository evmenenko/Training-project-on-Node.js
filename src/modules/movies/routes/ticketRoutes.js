const ticketController = require('../controllers/TicketController');
const filters = require('../../../middleware/filters');

module.exports = (router) => {
  router.delete('/ticket/order/:displayId', filters.isUser, ticketController.cancelTicket);
  router.post('/ticket/order', filters.isUser, ticketController.orderTicket);
  // куда выносить эту авторизацию: в фильтры из middleware или создать в этом модуле папку filrets / middleware?
  // и вообще стоит ли возлагать на контроллер обработку одного действия, но для 4(!) разных случаев:
  // - просмотр абсолютно всех бронирований;
  // - основное задание 6:
  //   ~ просмотр бронирований определенного фильма;
  // - дополнительное задание 12 
  //   ~ просмотр бронирований определенного пользователя (может админ);
  //   ~ просмотр своих бронирований (может сам пользователь);
  // вроде бы не стоит, но на что тогда его делить?
  router.get('/ticket/order', async (ctx, next) => {

    if (ctx.query.userId) {
      ctx.state = ctx.query.userId;
      await filters.isAdmin(ctx, next);
    }
    ctx.state = ctx.req.user.id;
    await next();
  }, ticketController.readAll);
  router.get('/ticket/:id', ticketController.readById);
  router.delete('/ticket/:id', ticketController.destroy);
  router.get('/ticket', ticketController.readAll);
  router.post('/ticket', ticketController.create);
}