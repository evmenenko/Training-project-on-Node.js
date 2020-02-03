const TicketService = require('../services/TicketService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class TicketController {

	async readAll(ctx, next) {
		
		let tickets = await TicketService.readAll();

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