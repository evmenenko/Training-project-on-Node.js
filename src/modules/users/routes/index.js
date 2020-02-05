const userRoutes = require('./userRoutes');
const roleRoutes = require('./roleRoutes');
const requestRoutes = require('./requestRoutes');
const controlPointRoutes = require('./controlPointRoutes');

module.exports = (router) => {
  userRoutes(router);
  roleRoutes(router);
  requestRoutes(router);
}