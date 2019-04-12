// Create the visit model to be associated with a patient
module.exports = function(sequelize) {
  var Visit = sequelize.define("visit", {
    // reason: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // complaint: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // symptoms: {
    //   general: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   eyes: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   earNoseThroat: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   cardio: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   gastro: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   musculoskeletal: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   skin: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    //   neuro: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   }
    // },
    // vitals: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // }
  });

  Visit.associate = function(models) {
    Visit.belongsTo(models.patient, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Visit;
};
