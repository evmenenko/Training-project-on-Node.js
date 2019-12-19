import UserService from '../services/UserService'
import ResponseFormat from '../../../helpers/ResponseFormat'

class UserController {

	constructor() {
    this.UserService = new UserService();
	}

	async create(ctx, next) {

		let user = await this.UserService.create({
			login: ctx.body.login,
			password: ctx.body.password,
			firstName: ctx.body.firstName,
			lastName: ctx.body.lastName,
			email: ctx.body.email,
		});

		await user.setRoles(ctx.body.roleIds);

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
		
		let users = await this.UserService.readAll();

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
		
		let user = await this.UserService.readById(ctx.params.id);

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

		let updatedUser = await this.UserService.update(
			ctx.params.id,
			{
				login: ctx.body.login,
				password: ctx.body.password,
				firstName: ctx.body.firstName,
				lastName: ctx.body.lastName,
				email: ctx.body.email,
			}
		);

		await updatedUser.setRoles(ctx.body.roleIds);

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

		await this.UserService.destroy(ctx.params.id);

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

export default new UserController()