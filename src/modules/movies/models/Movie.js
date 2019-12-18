const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Movie extends Sequelize.Model {}
  
  Movie.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: DataTypes.TEXT,
    previewUrl: {
      type: DataTypes.STRING(2048),
      allowNull: false,
      validate: {
        isDate: true,
      },
      field: 'preview_url',
    },
  }, {
    sequelize,
    charset: 'UTF8MB4',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Movie',
    tableName: 'movies',
    name: {
      singular: 'Movie',
      plural: 'Movies',
    },
  });
  
  Movie.associate = function(models) {
    Movie.belongsToMany(models.Tag, {
      through: models.TagMovie,
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'movieId',
    });
    Movie.hasMany(models.Display, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'movieId',
    });
  }

  return Movie;
}