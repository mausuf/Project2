// Create the visit model to be associated with a patient
module.exports = function(sequelize, DataTypes) {
var Visit = sequelize.define("visit", {
    reason: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    complaint: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    symptoms: {
        general: {
            type: Sequelize.STRING,
            allowNull: false
        },
        eyes: {
            type: Sequelize.STRING,
            allowNull: false
        },
        earNoseThroat: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cardio: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gastro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        musculoskeletal: {
            type: Sequelize.STRING,
            allowNull: false
        },
        skin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        neuro: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    vitals: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Visit.associate = function(models) {
    Visit.belongsTo(models.Patient, {
        foreignKey: {
            allowNull: false
        }
    });
}
return Visit;
}