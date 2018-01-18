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
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                len: [1]
            }
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
            allowNull: false
        },
        neutered_spayed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        survey_question_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_5: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_6: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_7: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_8: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_9: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        survey_question_10: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    
    Dog.associate = function(models) {
        Dog.belongsTo(models.User);
        //Dog.hasOne(models.Survey);
    };

    return Dog;
};

