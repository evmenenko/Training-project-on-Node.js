const UserService = require('../modules/users/services/UserService');
const BadRequest = require('../classes/errors/4xx/badRequest');
const usersInfo = require('../constants/usersInfo');

const roleFilter = (roleName) => {

  return async (ctx, next) => {

    let user = await UserService.readById(ctx.req.user.id);
    
    if (!user.roles.find(role => role.name == roleName)) {
      throw new BadRequest("Access denied");
    }
  
    await next();
  }
}

const isAdmin = roleFilter(usersInfo.ADMIN_ROLE_NAME);
const isUser = roleFilter(usersInfo.USER_ROLE_NAME);

module.exports = {
  isAdmin,
  isUser,
}