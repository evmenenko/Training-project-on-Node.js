const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Display extends Sequelize.Model {}
  
  Display.init({
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
      field: 'start_date',
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
      field: 'end_date',
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'movie_id',
    },
  }, {
    sequelize,
    charset: 'UTF8MB4',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Display',
    tableName: 'displays',
    name: {
      singular: 'Display',
      plural: 'Displays',
    },
  });
  
  Display.associate = function(models) {
    Display.belongsToMany(models.User, {
      through: models.Ticket,
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'displayId',
    });
    Display.belongsTo(models.Movie, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'movieId',
    });
  }

  return Display;
}