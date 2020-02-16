const Sequelize = require('sequelize');
const Hash = require('../../../classes/Hash');

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
      type: DataTypes.STRING(300),
      allowNull: false,
      notEmpty: true,
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
      as: 'roles',
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'userId',
    });
    User.belongsToMany(models.Display, {
      through: models.Ticket,
      as: 'tickets',
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

  User.prototype.validPassword = async function (password) {
    return await Hash.compare(password, this.password);
  }

  User.beforeCreate(
    (user, options) => user.password = Hash.get(user.password)
  );

  User.beforeUpdate(
    (user, options) => user.password = Hash.get(user.password)
  );

  return User;
}