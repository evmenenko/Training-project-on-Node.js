const TicketService = require('../services/TicketService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class TicketController {

  async create(ctx, next) {
		
		let ticket = await TicketService.create({
      userId: ctx.request.body.userId,
      displayId: ctx.request.body.displayId,
    });

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				ticket,
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
				ticket,
				"Ticket ordered successfully",
				201,
				"success"
			);
  }

	async readAll(ctx, next) {
		
    let tickets;

    if (ctx.query.movieId) {
      tickets = await TicketService.readByMovieId(ctx.query.movieId);
    }
    else {
      tickets = await TicketService.readAll();
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
				201,
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