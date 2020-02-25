const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class TagsMovies extends Sequelize.Model {}

  TagsMovies.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tag_id',
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'movie_id',
    },
  }, {
    sequelize,
    underscored: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: "deleted_date",
    paranoid: true,
    modelName: 'TagMovie',
    tableName: 'tags_movies',
  });

  return TagsMovies;
}