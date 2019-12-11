const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class Movie extends Sequelize.Model {}
    
    Movie.init({
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: DataTypes.TEXT,
        preview_url: {
            type: DataTypes.STRING(2048),
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
    }, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'movie',
        name: {
            singular: 'movie',
            plural: 'movies',
        },
    })
    
    Movie.associate = function(models) {
        Movie.belongsToMany(models.tag, {
            through: models.tag_movie,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'movie_id',
        })
        Movie.hasMany(models.display, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'movie_id',
        })
    }

    return Movie
}