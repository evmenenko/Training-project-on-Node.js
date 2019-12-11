const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class Requests extends Sequelize.Model {}

    Requests.init({}, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'request',
        name: {
            singular: 'request',
            plural: 'requests',
        },
    })

    Requests.associate = function(models) {
        Requests.belongsTo(models.user, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'user_id',
        })
    }
    
    return Requests
}