const RequestService = require('../services/RequestService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class RequestController {

	async create(ctx, next) {

		let request = await RequestService.create({
			userId: ctx.req.user.id,
		});

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				request,
				"Request created successfully",
				201,
				"success"
			);
	}

	async readAll(ctx, next) {
		
		let requests = await RequestService.readAll();

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				requests,
				"Requests read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let request = await RequestService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				request,
				"Request read successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

		await RequestService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Request deleted successfully",
				200,
				"success"
			);
	}
}

module.exports = new RequestController();