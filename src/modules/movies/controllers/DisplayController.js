const DisplayService = require('../services/DisplayService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class DisplayController {

	async create(ctx, next) {

		let display = await DisplayService.create({
			startDate: new Date(ctx.request.body.startDate),
			endDate: new Date(ctx.request.body.endDate),
			movieId: ctx.request.body.movieId,
		});

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				display,
				"Display created successfully",
				201,
				"success"
			);
	}

	async readAll(ctx, next) {
		
		let displays = await DisplayService.readAll();

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				displays,
				"Displays read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let display = await DisplayService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				display,
				"Display read successfully",
				200,
				"success"
			);
	}

	async update(ctx, next) {

		let updatedDisplay = await DisplayService.update(
			ctx.params.id,
			{
        startDate: new Date(ctx.request.body.startDate),
        endDate: new Date(ctx.request.body.endDate),
        movieId: ctx.request.body.movieId,
			}
		);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				updatedDisplay,
				"Display updated successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

		await DisplayService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Display deleted successfully",
				200,
				"success"
			);
	}
}

module.exports = new DisplayController();