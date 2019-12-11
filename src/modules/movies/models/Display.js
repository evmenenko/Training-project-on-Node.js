const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class Display extends Sequelize.Model {}
    
    Display.init({
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        }
    }, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'display',
        name: {
            singular: 'display',
            plural: 'displays',
        },
    })
    
    Display.associate = function(models) {
        Display.belongsToMany(models.user, {
            through: models.ticket,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'display_id',
        })
        Display.belongsTo(models.movie, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'movie_id',
        })
    }

    return Display
}