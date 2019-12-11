const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    
    class Tag extends Sequelize.Model {}

    Tag.init({
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
        modelName: 'tag',
        name: {
            singular: 'tag',
            plural: 'tags',
        },
    })
    
    Tag.associate = function(models) {
        Tag.belongsToMany(models.movie, {
            through: models.tag_movie,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'tag_id',
        })
    }

    return Tag
}