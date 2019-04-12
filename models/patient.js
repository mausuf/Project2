// Create "Patient" model with basic info
module.exports = function (sequelize, DataTypes) {
    var Patient = sequelize.define("patient", {
        // Indifiduat patient ID
        patientID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // Name of Patient
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Patient's address
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Patient's Date of Birth
        DoB: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        // Patient's Phone Number
        phoneNumber: DataTypes.DECIMAL,
        // Patient's email
        email: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: true
        },
        // Patient's ethnicity
        ethnicity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // Patient's Primary Care Doctor
        PCP: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meds: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Patient;
};
