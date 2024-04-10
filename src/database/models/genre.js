module.exports = (sequeize, DataTypes) => {
    const Genre = sequeize.define('Genre', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        tableName: "genres",
        createdAt: "created_at",
        updatedAt: 'updated_at'
    });
    return Genre;
};