const TicketService = require('../services/TicketService');
const ResponseFormat = require('../../../helpers/ResponseFormat');
const paginationInfo = require('../../../constants/paginationInfo');

class TicketController {

  async create(ctx, next) {
		
    let ticket = await TicketService.create({
      userId: ctx.request.body.userId,
      displayId: ctx.request.body.displayId,
    });

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				{ id: ticket.id },
				"Ticket created successfully",
				201,
				"success"
			);
  }
  
  async orderTicket(ctx, next) {
		
		let ticket = await TicketService.create({
      userId: ctx.req.user.id,
      displayId: ctx.request.body.displayId,
    });

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				{ id: ticket.id },
				"Ticket ordered successfully",
				201,
				"success"
			);
  }

	async readAll(ctx, next) {
		
		let page = parseInt(ctx.query.pageNumber, 10) || paginationInfo.DEFAULT_PAGE;
    let amount = parseInt(ctx.query.recordsAmount, 10) || paginationInfo.DEFAULT_AMOUNT;
    let tickets;

    if (ctx.query.movieId) {
      tickets = await TicketService.readByMovieId(ctx.query.movieId, page, amount);
    }
    else if (ctx.state.userId) {
      tickets = await TicketService.readByUserId(ctx.query.userId, page, amount);
    }
    else {
      tickets = await TicketService.readAll(page, amount);
    }

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				tickets,
				"Tickets read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let ticket = await TicketService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				ticket,
				"Ticket read successfully",
				200,
				"success"
			);
	}
  
  async cancelTicket(ctx, next) {

    await TicketService.cancelTicket({
      userId: ctx.req.user.id,
      displayId: ctx.params.displayId,
    });

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Ticket canceled successfully",
				200,
				"success"
			);
  }


	async destroy(ctx, next) {

		await TicketService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Ticket deleted successfully",
				200,
				"success"
			);
	}
}

module.exports = new TicketController();