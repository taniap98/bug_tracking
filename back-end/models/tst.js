module.exports = (sequelize, DataTypes) => {
    const TST = sequelize.define('tst', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

    });
    TST.associate = models => {
        TST.hasMany(models.bug, {
            onDelete: "cascade"
        });
        TST.belongsTo(models.user, {
            as: 'user',
            foreignKey: "id"
        });
        TST.belongsTo(models.project, {
            as: 'project',
            foreignKey: "id"
        });

    };
    return TST;
}