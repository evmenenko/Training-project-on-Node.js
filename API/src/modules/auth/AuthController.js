const UserService = require('../users/services/UserService');
const NotFound = require('../../classes/errors/4xx/NotFound');
const ResponseFormat = require('../../helpers/ResponseFormat');
const { passport } = require('../../passport');
const usersInfo = require('../../constants/usersInfo');

class AuthController {

	async register(ctx) {

    let user = await UserService.create({
      login: ctx.request.body.login,
      password: ctx.request.body.password,
      firstName: ctx.request.body.firstName,
      lastName: ctx.request.body.lastName,
      email: ctx.request.body.email,
    });

    await user.setRoles( [ usersInfo.USER_ROLE_ID ] );

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
  
  async login(ctx) {
    
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
  
  logout(ctx) {
  
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
}

module.exports = new AuthController();