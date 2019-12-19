import RoleService from '../services/RoleService'
import ResponseFormat from '../../../helpers/ResponseFormat'

class RoleController {

	constructor() {
    this.RoleService = new RoleService();
	}

	async create(ctx, next) {

		let role = await this.RoleService.create({
			name: ctx.body.name,
		});

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				role,
				"Role created successfully",
				201,
				"success"
			);
	}

	async readAll(ctx, next) {
		
		let roles = await this.RoleService.readAll();

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				roles,
				"Roles read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let role = await this.RoleService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				role,
				"Role read successfully",
				200,
				"success"
			);
	}

	async update(ctx, next) {

		let updatedRole = await this.RoleService.update(
      ctx.params.id,
      {
        name: ctx.body.name,
      }
    );

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				updatedRole,
				"Role updated successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

		await this.RoleService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"Role deleted successfully",
				200,
				"success"
			);
	}
}

export default new RoleController()