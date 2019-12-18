import UserService from '../services/UserService'
import ResponseFormat from '../../../helpers/ResponseFormat'

class UserController {

	constructor() {
    this.UserService = new UserService();
	}

	async create(ctx, next) {
		try {
			let user = await this.UserService.create({
				login: ctx.body.login,
				password: ctx.body.password,
				firstName: ctx.body.firstName,
				lastName: ctx.body.lastName,
				email: ctx.body.email,
			});

			await user.setRoles(ctx.body.roleIds);

			let code = ctx.status = 201;
			let message = "User created successfully";
			let status = "success";
			let data = {
				id: user.id,
				login: user.login,
			};

			ctx.body = ResponseFormat.build(data, message, code, status);

		} catch (error) {
			next(error);
		}
	}

	async readAll(ctx, next) {
		try {
			let users = await this.UserService.readAll();
			let code = ctx.status = 200;
			let message = "Users read successfully";
			let status = "success";
			
			ctx.body = ResponseFormat.build(users, message, code, status);

		} catch (error) {
			next(error)
		}
	}

	async readById(ctx, next) {
		try {
			let user = await this.UserService.readById(ctx.params.id);
			let code = ctx.status = 200;
			let message = "User read successfully";
			let status = "success";

			ctx.body = ResponseFormat.build(user, message, code, status);
			
		} catch (error) {
			next(error)
		}
	}

	async update(ctx, next) {
		try {
			await this.UserService.update(ctx.params.id, {
				login: ctx.body.login,
				password: ctx.body.password,
				firstName: ctx.body.firstName,
				lastName: ctx.body.lastName,
				email: ctx.body.email,
			});

			let user = await this.UserService.readById(ctx.params.id);

			await user.setRoles(ctx.body.roleIds);

			let code = ctx.status = 200;
			let message = "User updated successfully";
			let status = "success";

			ctx.body = ResponseFormat.build(user, message, code, status);
			
		} catch (error) {
			next(error)
		}
	}

	async destroy(ctx, next) {
		try {
			await this.UserService.destroy(ctx.params.id)

			let data = {};
			let code = ctx.status = 200;
			let message = "User updated successfully";
			let status = "success";

			ctx.body = ResponseFormat.build(data, message, code, status);
			
		} catch (error) {
			next(error)
		}
	}
}

export default new UserController()