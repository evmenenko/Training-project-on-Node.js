const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class AccessRestriction extends Sequelize.Model {}

    AccessRestriction.init({
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
        modelName: 'access_restriction',
        name: {
            singular: 'accessRestriction',
            plural: 'accessRestrictions',
        },
    })
    
    AccessRestriction.associate = function(models) {
        AccessRestriction.belongsTo(models.role, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'role_id',
        })
    }

    return AccessRestriction
}