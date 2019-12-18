const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Tag extends Sequelize.Model {}

  Tag.init({
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
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
    modelName: 'Tag',
    tableName: 'tags',
    name: {
      singular: 'Tag',
      plural: 'Tags',
    },
  });
  
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Movie, {
      through: models.TagMovie,
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'tagId',
    });
  }

  return Tag;
}