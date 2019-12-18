const Sequelize = require('sequelize');

export default (sequelize, DataTypes) => {
  
  class Role extends Sequelize.Model {}

  Role.init({
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
    modelName: 'Role',
    tableName: 'roles',
    name: {
      singular: 'Role',
      plural: 'Roles',
    },
  });
  
  Role.associate = function(models) {
    Role.belongsToMany(models.User, {
      through: models.UserRole,
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'roleId',
    });
    Role.belongsToMany(models.ControlPoint, {
      through: models.AccessRestriction,
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'roleId',
    });
  }

  return Role;
}