import ControlPointService from '../services/ControlPointService'
import ResponseFormat from '../../../helpers/ResponseFormat'

class ControlPointController {

	constructor() {
    this.ControlPointService = new ControlPointService();
	}

	async create(ctx, next) {

		let controlPoint = await this.ControlPointService.create({
			route: ctx.body.route,
			method: ctx.body.method,
		});

		controlPoint.setRoles(ctx.body.roleIds);

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
		
		let controlPoints = await this.ControlPointService.readAll();

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
		
		let controlPoint = await this.ControlPointService.readById(ctx.params.id);

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

		let controlPoint = await this.ControlPointService.update(
			ctx.params.id,
			{
				route: ctx.body.route,
				method: ctx.body.method,
			}
		);

		controlPoint.setRoles(ctx.body.roleIds);

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

		await this.ControlPointService.destroy(ctx.params.id);

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

export default new ControlPointController()