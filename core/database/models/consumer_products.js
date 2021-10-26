const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consumer_products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    productID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Nullable if not core product",
      references: {
        model: 'products',
        key: 'id'
      }
    },
    consumerProductType: {
      type: DataTypes.ENUM('CORE','PACKAGE','OPTIONS'),
      allowNull: false,
      comment: "CORE - Main product, PACKAGE - bundles of cores, OPTIONS - bundle of cores for selection"
    },
    productWeight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    productHeight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    productLength: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    productWidth: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ratings: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "This value is populated periodically by the system"
    },
    ratingsOverride: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "When its value is TRUE, column ratings is ignored and column ratingsOverrideValue is used instead"
    },
    ratingsOverrideValue: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 5
    },
    isOutOfStock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    isSpecialDelivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    shortLink: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    previewLink: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    weightNote: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'consumer_products',
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
        name: "consumer_products_productID",
        using: "BTREE",
        fields: [
          { name: "productID" },
        ]
      },
    ]
  });
};
