const LocalStrategy = require('passport-local').Strategy;
const UserRepository = require('../../../modules/users/repositories/UserRepository');
const userRepository = new UserRepository();

module.exports = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async function(email, password, next) {
    
    const user = await userRepository.get({ 
      where: { email },
      attributes: [ 'id', 'login', 'email', 'password' ],
    });
    
    if (!user) {
      return next(null, false, { message: 'Incorrect email' });
    }

    if (await user.validPassword(password)) {
      return next(null, user, { message: 'User authorized successfully' });
    }

    return next(null, false, { message: 'Incorrect password' });
  }
);