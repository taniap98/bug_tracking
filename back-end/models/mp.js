module.exports = (sequelize, DataTypes) => {
    const MP = sequelize.define('mp', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

    });
    MP.associate = models => {
        MP.belongsTo(models.user, {
            as: 'user', //userId
            foreignKey: "id"
        })
        MP.belongsTo(models.project, {
            as: 'project',
            foreignKey: "id"
        })
    };
    return MP;
}