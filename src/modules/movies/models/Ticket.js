const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class Ticket extends Sequelize.Model {}

    Ticket.init({}, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'ticket',
        name: {
            singular: 'ticket',
            plural: 'tickets',
        },
    })
    
    Ticket.associate = function(models) {
        Ticket.belongsTo(models.user, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'user_id',
        })
        Ticket.belongsTo(models.display, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'display_id',
        })
    }

    return Ticket
};