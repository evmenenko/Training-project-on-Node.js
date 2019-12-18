const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
  class AccessRestriction extends Sequelize.Model {}

  AccessRestriction.init({
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'role_id',
    },
    controlPointId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'control_point_id',
    },
  }, {
    sequelize,
    charset: 'UTF8MB4',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'AccessRestriction',
    tableName: 'access_restrictions',
  });

  return AccessRestriction;
}