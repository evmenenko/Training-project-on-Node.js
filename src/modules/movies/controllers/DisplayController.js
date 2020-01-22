import DisplayService from '../services/DisplayService'
import ResponseFormat from '../../../helpers/ResponseFormat'

// Где реализовать работу с тегами

class DisplayController {

	constructor() {
    this.DisplayService = new DisplayService();
	}

	async create(ctx, next) {

		let display = await this.DisplayService.create({
			startDate: ctx.body.startDate,
			endDate: ctx.body.endDate,
			movieId: ctx.body.movieId,
		});

		await next(); // TagController.addTags

		await display.setTags(ctx.state.tagIds);

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
		
		let displays = await this.DisplayService.readAll();

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
		
		let display = await this.DisplayService.readById(ctx.params.id);

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

		let updatedDisplay = await this.DisplayService.update(
			ctx.params.id,
			{
        startDate: ctx.body.startDate,
        endDate: ctx.body.endDate,
        movieId: ctx.body.movieId,
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

		await this.DisplayService.destroy(ctx.params.id);

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

export default new DisplayController();