module.exports = function(sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            //allowNull: false, 
            // validate: {
            //     len: [1]
            // }
        },
        sex: {
            type: DataTypes.BOOLEAN,  //female === true, male === false
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        temperament: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        fixed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0,255]
            }
        }
    });
    
    Dog.associate = function(models) {
        Dog.belongsTo(models.User);
        Dog.hasOne(models.Survey);
    };

    return Dog;
};

