const Sequelize = require('sequelize')

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
        modelName: 'role',
        name: {
            singular: 'role',
            plural: 'roles',
        },
    })
    
    Role.associate = function(models) {
        Role.belongsToMany(models.user, {
            through: models.user_role,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'role_id',
        })
        Role.belongsToMany(models.url, {
            through: models.access_restriction,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'role_id',
        })
    }

    return Role
}