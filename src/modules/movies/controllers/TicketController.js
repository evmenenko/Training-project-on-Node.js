const TicketService = require('../services/TicketService');
const ResponseFormat = require('../../../helpers/ResponseFormat');
const paginationInfo = require('../../../constants/paginationInfo');

class TicketController {
  
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
  
  async readByMovieId(ctx, next) {
		
		let page = parseInt(ctx.query.pageNumber, 10) || paginationInfo.DEFAULT_PAGE;
    let amount = parseInt(ctx.query.recordsAmount, 10) || paginationInfo.DEFAULT_AMOUNT;
    let tickets = await TicketService.readByMovieId(ctx.params.id, page, amount);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				tickets,
				"Tickets read successfully",
				200,
				"success"
			);
  }
  
  async readByUserId(ctx, next) {
		
		let page = parseInt(ctx.query.pageNumber, 10) || paginationInfo.DEFAULT_PAGE;
    let amount = parseInt(ctx.query.recordsAmount, 10) || paginationInfo.DEFAULT_AMOUNT;
    let tickets = await TicketService.readByUserId(ctx.state.id, page, amount);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				tickets,
				"Tickets read successfully",
				200,
				"success"
			);
	}

	async readAll(ctx, next) {
		
		let page = parseInt(ctx.query.pageNumber, 10) || paginationInfo.DEFAULT_PAGE;
    let amount = parseInt(ctx.query.recordsAmount, 10) || paginationInfo.DEFAULT_AMOUNT;
    let tickets = await TicketService.readAll(page, amount);

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
      displayId: ctx.params.id,
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