const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class RoleUser extends Sequelize.Model {}

  RoleUser.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'role_id',
    },
  }, {
    sequelize,
    charset: 'UTF8MB4',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'UserRole',
    tableName: 'users_roles',
  });

  return RoleUser;
}