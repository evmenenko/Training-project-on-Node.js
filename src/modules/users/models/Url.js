const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class Url extends Sequelize.Model {}

    Url.init({
        url: {
            type: DataTypes.STRING(2048),
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
        method: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        sequelize,
        charset: 'UTF8MB4',
        engine: 'INNODB',
        paranoid: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        modelName: 'url',
        name: {
            singular: 'url',
            plural: 'urls',
        },
    })
    
    Url.associate = function(models) {
        Url.belongsToMany(models.role, {
            through: models.access_restriction,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'url_id',
        })
    }

    return Url
}