const usersModels = require('./modules/users/models');
const moviesModels = require('./modules/movies/models');

const models = {};

Object.assign(models, usersModels, moviesModels);

Object.keys(models).forEach(modelName => {
	models[modelName].associate && models[modelName].associate(models);
});

module.exports = models;