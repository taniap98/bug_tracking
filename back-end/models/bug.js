module.exports = (sequelize, DataTypes) => {
    const Bug = sequelize.define('bug', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },

        severity: DataTypes.INTEGER,
        priority: DataTypes.INTEGER,
        description: DataTypes.STRING,
        linkCommit: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        linkResolve: DataTypes.STRING
    });

    Bug.associate = models => {
        Bug.belongsTo(models.tst, {
            as: 'tst',
            foreignKey: "id"
        })
        Bug.belongsTo(models.project, {
            as: 'project',
            foreignKey: "id"
        })
    };
    return Bug;
}