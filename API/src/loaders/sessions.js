const { passport } = require('../passport');
const session = require('koa-session2');

module.exports = (app) => {
  app
    .use(session({ 
      secret: 'SECRET',
      resave: true,
      saveUninitialized: false, 
    }))
    .use(passport.initialize())
    .use(passport.session());
}