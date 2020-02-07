const userRoutes = require('./userRoutes');
const roleRoutes = require('./roleRoutes');
const requestRoutes = require('./requestRoutes');

module.exports = (router) => {
  userRoutes(router);
  roleRoutes(router);
  requestRoutes(router);
}