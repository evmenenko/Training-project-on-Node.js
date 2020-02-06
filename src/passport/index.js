const passport = require('koa-passport');
const UserService = require('../modules/users/services/UserService');
const Unauthorized = require('../classes/errors/4xx/unauthorized');
 
const localStrategy = require('./strategies/localStrategy');

passport.use('local', localStrategy);

passport.serializeUser(function(user, next) {
	next(null, user.id);
});

passport.deserializeUser(async function(id, next) {
	next(null, await UserService.readById(id));
});

async function isAuthenticated(ctx, next) {
  
	if (!ctx.isAuthenticated()) throw new Unauthorized();

	await next();
}

module.exports = { passport, isAuthenticated };