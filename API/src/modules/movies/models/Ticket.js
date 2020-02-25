const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    
  class Ticket extends Sequelize.Model {}

  Ticket.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
    },
    displayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'display_id',
    },
  }, {
    sequelize,
    charset: 'UTF8MB4',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Ticket',
    tableName: 'tickets',
    name: {
      singular: 'Ticket',
      plural: 'Tickets',
    },
  });

  Ticket.associate = function(models) {
    Ticket.belongsTo(models.Display, {
      as: 'display',
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'displayId',
    });
    Ticket.belongsTo(models.User, {
      as: 'user',
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'userId',
    });
  }

  return Ticket;
};