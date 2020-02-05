const UserService = require('../../modules/users/services/UserService');
const BadRequest = require('../../classes/errors/4xx/badRequest');
const usersInfo = require('../../constants/usersInfo');

module.exports = async (ctx, next) => {

  let user = await UserService.readById(ctx.req.user.id);
  
  for (let role of user.roles) {

    if (role.name == usersInfo.roles.user) {
      await next();
      return;
    }
  }

  throw new BadRequest("Access denied");
}