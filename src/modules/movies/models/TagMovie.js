const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class TagsMovies extends Sequelize.Model {}

    TagsMovies.init({}, {
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'tag_movie',
        tableName: 'tags_movies',
    })
    
    TagsMovies.associate = function(models) {
        TagsMovies.belongsTo(models.tag, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'tag_id',
        })
        TagsMovies.belongsTo(models.movie, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'movie_id',
        })
    }

    return TagsMovies
}