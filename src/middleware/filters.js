const UserService = require('../modules/users/services/UserService');
const BadRequest = require('../classes/errors/4xx/badRequest');
const usersInfo = require('../constants/usersInfo');

const roleFilter = (roleName) => {

  return async (ctx, next) => {

    let user = await UserService.readById(ctx.req.user.id);
    
    for (let role of user.roles) {
  
      if (role.name == roleName) {
        await next();
        return;
      }
    }
  
    throw new BadRequest("Access denied");
  }
}

const isAdmin = roleFilter(usersInfo.ADMIN_ROLE_NAME);
const isUser = roleFilter(usersInfo.USER_ROLE_NAME);

module.exports = {
  isAdmin,
  isUser,
}