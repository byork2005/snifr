module.exports = function(sequelize, DataTypes) {
    var Search_filters = sequelize.define("Search_filters", {
        sex_pref: {
            type: DataTypes.STRING,  //female === true, male === false
            allowNull: true,
        },
        size_pref: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        temperament_pref: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fixed_pref: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    });

    Search_filters.associate = function(models) {
        Search_filters.belongsTo(models.Dog, {
            onDelete: 'cascade'
        });
    };
}