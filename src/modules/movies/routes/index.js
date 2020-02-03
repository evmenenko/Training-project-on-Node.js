const displayRoutes = require('./displayRoutes');
const movieRoutes = require('./movieRoutes');
const tagRoutes = require('./tagRoutes');
const ticketRoutes = require('./ticketRoutes');

module.exports = (router) => {
  displayRoutes(router);
  movieRoutes(router);
  tagRoutes(router);
  ticketRoutes(router);
}