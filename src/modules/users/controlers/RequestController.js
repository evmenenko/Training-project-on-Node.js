import RequestService from '../services/RequestService'
import ResponseFormat from '../../../helpers/ResponseFormat'

class RequestController {

	constructor() {
    this.RequestService = new RequestService();
	}

	async create(ctx, next) {

		let request = await this.RequestService.create({
			userId: ctx.body.userId,
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
		
		let requests = await this.RequestService.readAll();

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
		
		let request = await this.RequestService.readById(ctx.params.id);

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

		await this.RequestService.destroy(ctx.params.id);

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

export default new RequestController()