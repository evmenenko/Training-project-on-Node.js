const displayRoutes = require('./displayRoutes');
const movieRoutes = require('./movieRoutes');
const tagRoutes = require('./tagRoutes');

module.exports = (router) => {
  displayRoutes(router);
  movieRoutes(router);
  tagRoutes(router);
}