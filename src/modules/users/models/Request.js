const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Requests extends Sequelize.Model {}

  Requests.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
  }, {
    sequelize,
    charset: 'UTF8MB4',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Request',
    tableName: 'requests',
    name: {
      singular: 'Request',
      plural: 'Requests',
    },
  });

  Requests.associate = function(models) {
    Requests.belongsTo(models.User, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'userId',
    });
  }
  
  return Requests;
}