const passport = require('koa-passport');
const UserService = require('../modules/users/services/UserService');
const Unauthorized = require('../classes/errors/4xx/unauthorized');
const NotFound = require('../classes/errors/4xx/notFound');
const ResponseFormat = require('../helpers/ResponseFormat');
 
const localStrategy = require('./strategies/localStrategy');

passport.use('local', localStrategy);

passport.serializeUser(function(user, next) {
	next(null, user.id);
});

passport.deserializeUser(async function(id, next) {
	next(null, await UserService.readById(id));
});

async function register(ctx, next) {

  let user = await UserService.create({
		login: ctx.request.body.login,
		password: ctx.request.body.password,
		firstName: ctx.request.body.firstName,
		lastName: ctx.request.body.lastName,
		email: ctx.request.body.email,
	});

	// 2 - user
	await user.setRoles( [ 2 ] );

	ctx.login(user);

	ctx.status = 201;
	ctx.body = ResponseFormat
		.build(
			{
				id: user.id,
				login: user.login,
			},
			"Registration completed successfully",
			201,
			"success"
		);
}

async function login(ctx) {
  
  await passport.authenticate('local', function(err, user, info) {
		
		if (err) throw err;
			
		// нужно ли тут проверку делать, если в сервисе есть она? (deserialize)
		if (!user) throw new NotFound(info.message);

		ctx.login(user);
		
		ctx.status = 200;
		ctx.body = ResponseFormat
			.build(
				{
					id: user.id,
					login: user.login,
				},
				info.message,
				200,
				"success"
			);
	})(ctx);
}

function logout(ctx) {

	ctx.logout();
	
	ctx.status = 200;
	ctx.body = ResponseFormat
		.build(
			{},
			'User logout successfully',
			200,
			'success'
		);
}

async function isAutenticated(ctx, next) {
  
	if (!ctx.isAuthenticated()) throw new Unauthorized();

	await next();
}

module.exports = { passport, login, logout, register, isAutenticated };