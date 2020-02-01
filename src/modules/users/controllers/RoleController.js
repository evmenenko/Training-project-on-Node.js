const RoleService = require('../services/RoleService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class RoleController {

	async create(ctx, next) {

		let role = await RoleService.create({
			name: ctx.request.body.name,
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
		
		let roles = await RoleService.readAll();

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
		
		let role = await RoleService.readById(ctx.params.id);

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

		let updatedRole = await RoleService.update(
      ctx.params.id,
      {
        name: ctx.request.body.name,
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

		await RoleService.destroy(ctx.params.id);

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

module.exports = new RoleController();