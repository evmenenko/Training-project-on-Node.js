const usersModels = require('../modules/users')
const moviesModels = require('../modules/movies')

const models = {}

Object.assign(db, usersModels, moviesModels)

Object.keys(models).forEach(modelName => {
    models[modelName].associate && models[modelName].associate(models)
})

module.exports = models