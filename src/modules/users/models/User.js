const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class User extends Sequelize.Model {}

  User.init({
    login: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      notEmpty: true,
      notNull: true,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
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
    modelName: 'User',
    tableName: 'users',
    name: {
      singular: 'User',
      plural: 'Users',
    },
  });
  
  User.associate = function(models) {
    User.belongsToMany(models.Role, {
      through: models.UserRole,
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'userId',
    });
    User.belongsToMany(models.Display, {
      through: models.Ticket,
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'userId',
    });
    User.hasOne(models.Request, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'userId',
    });
  }

  return User;
}