const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mobileNo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profileID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_profiles',
        key: 'id'
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isMobileVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    mobileCountryCode: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: "International Country Code given by user at time of registration"
    },
    smsVerificationCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "This is the verification code that is created when we invoke"
    },
    firebaseUID: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    referralCode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    isReferralCodeChanged: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    stripeCustomerID: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_users_profiles",
        using: "BTREE",
        fields: [
          { name: "profileID" },
        ]
      },
    ]
  });
};
