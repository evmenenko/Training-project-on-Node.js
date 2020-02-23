const UserService = require('../services/UserService');
const ResponseFormat = require('../../../helpers/ResponseFormat');
const paginationInfo = require('../../../constants/paginationInfo');
const Mailer = require('../../../classes/Mailer');

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
				},
				"User created successfully",
				201,
				"success"
			);
  }
  
  async readAll(ctx, next) {

    let page = parseInt(ctx.query.page, 10) || paginationInfo.DEFAULT_PAGE;
    let amount = parseInt(ctx.query.amount, 10) || paginationInfo.DEFAULT_AMOUNT;
    let users = await UserService.readAll(page, amount);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				users,
				"Users read successfully",
				200,
				"success"
			);
	}

	async readByName(ctx, next) {

    let page = parseInt(ctx.query.page, 10) || paginationInfo.DEFAULT_PAGE;
    let amount = parseInt(ctx.query.amount, 10) || paginationInfo.DEFAULT_AMOUNT;
    let users = await UserService
      .readByName(
        ctx.query.firstName,
        ctx.query.lastName,
        page,
        amount
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

	async changeName(ctx, next) {

		let updatedUser = await UserService.update(
			ctx.req.user.id,
			{
				firstName: ctx.request.body.firstName,
				lastName: ctx.request.body.lastName,
			}
		);

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{
					id: updatedUser.id,
					login: updatedUser.login,
					email: updatedUser.email,
					firstName: updatedUser.firstName,
					lastName: updatedUser.lastName,
				},
				"User updated successfully",
				200,
				"success"
			);
	}

	async changePassword(ctx, next) {

    await UserService.changePassword(
      ctx.req.user.id,
      ctx.request.body.oldPassword,
      ctx.request.body.newPassword,
      ctx.request.body.repeatedNewPassword,
    );

		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{},
				"User changed password successfully",
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
					email: updatedUser.email,
					firstName: updatedUser.firstName,
					lastName: updatedUser.lastName,
				},
				"User updated successfully",
				200,
				"success"
			);
	}

	async destroy(ctx, next) {

    let deletedUser = await UserService.destroy(ctx.params.id);

    await Mailer.sendMail(
      deletedUser.email,
      "Account deleting",
      "Your account successfully deleted. In the future the site will realized opportunity of its restoration."
    );

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