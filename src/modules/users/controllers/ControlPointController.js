const ControlPointService = require('../services/ControlPointService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class ControlPointController {

	async create(ctx, next) {

		let controlPoint = await ControlPointService.create({
			route: ctx.request.body.route,
			method: ctx.request.body.method,
		});

		controlPoint.setRoles(ctx.request.body.roleIds);

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				controlPoint,
				"Control point created successfully",
				201,
				"success"
			);
	}

	async readAll(ctx, next) {
		
		let controlPoints = await ControlPointService.readAll();

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				controlPoints,
				"Control points read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let controlPoint = await ControlPointService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				controlPoint,
				"Control point read successfully",
				200,
				"success"
			);
	}

	async update(ctx, next) {

		let controlPoint = await ControlPointService.update(
			ctx.params.id,
			{
				route: ctx.request.body.route,
				method: ctx.request.body.method,
			}
		);

		controlPoint.setRoles(ctx.request.body.roleIds);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				controlPoint,
				"Control point updated successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

		await ControlPointService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Control point deleted successfully",
				200,
				"success"
			);
	}
}

module.exports = new ControlPointController();