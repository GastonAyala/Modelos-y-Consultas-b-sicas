module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define("Actor", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1)
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        
    }, {
        tableName: "actors",
        createdAt: "created_at",
        updatedAt: "updated_at"
    });

    return Actor;
};