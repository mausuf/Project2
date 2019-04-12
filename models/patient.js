// Create "Patient" model with basic info
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("patient", {
    // Indifiduat patient ID
    patientID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // Name of Patient
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // Patient's address
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // Patient's Date of Birth
    DoB: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    // Patient's Phone Number
    phoneNumber: Sequelize.DECIMAL,
    // Patient's email
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    // Patient's gender
    gender: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Patient's ethnicity
    ethnicity: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Patient's Primary Care Doctor
    PCP: {
      type: Sequelize.STRING,
      allowNull: false
    },
    meds: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Patient;
};
