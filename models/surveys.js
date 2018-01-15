module.exports = function(sequelize, DataTypes) {
    var Survey = sequelize.define("Survey", {
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
        preferred_size: DataTypes.STRING,
        preferred_breed: DataTypes.STRING,
        preferred_neutered_spayed: DataTypes.BOOLEAN,
        preferred_sex: DataTypes.BOOLEAN,
        preferred_range: DataTypes.INTEGER,

    });

    Survey.associate = function(models) {
        Survey.belongsTo(models.Dog, {
            onDelete: 'cascade'
        });
    };

    return Survey;
}