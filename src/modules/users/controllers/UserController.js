const UserService = require('../services/UserService');
const ResponseFormat = require('../../../helpers/ResponseFormat');

class UserController {

	async create(ctx, next) {

		let user = await UserService.create({
			login: ctx.request.body.login,
			password: ctx.request.body.password,
			firstName: ctx.request.body.firstName,
			lastName: ctx.request.body.lastName,
			email: ctx.request.body.email,
		});

		await user.setRoles(ctx.request.body.roleIds);

		ctx.status = 201;
		ctx.body = ResponseFormat
			.build(
				{
					id: user.id,
					login: user.login,
				},
				"User created successfully",
				201,
				"success"
			);
	}

	async readAll(ctx, next) {
		
		let users = await UserService.readAll();

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				users,
				"Users read successfully",
				200,
				"success"
			);
	}

	async readByFirstAndLastName(ctx, next) {
		
		let users = await UserService
			.readByFirstAndLastName(
        ctx.request.body.firstName,
        ctx.request.body.lastName
      );

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				users,
				"Users read successfully",
				200,
				"success"
			);
	}

	async readById(ctx, next) {
		
		let user = await UserService.readById(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				user,
				"User read successfully",
				200,
				"success"
			);
	}

	async update(ctx, next) {

		let updatedUser = await UserService.update(
			ctx.params.id,
			{
				login: ctx.request.body.login,
				password: ctx.request.body.password,
				firstName: ctx.request.body.firstName,
				lastName: ctx.request.body.lastName,
				email: ctx.request.body.email,
			}
		);

		await updatedUser.setRoles(ctx.request.body.roleIds);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{
					id: updatedUser.id,
					login: updatedUser.login,
				},
				"User updated successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

    await UserService.destroy(ctx.params.id);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"User deleted successfully",
				200,
				"success"
			);
	}
}

module.exports = new UserController();