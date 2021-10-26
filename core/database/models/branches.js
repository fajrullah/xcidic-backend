module.exports = function(sequelize, DataTypes) {
  return sequelize.define('branches', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    longitude: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    openingHours: {
      type: DataTypes.TIME,
      allowNull: false
    },
    isSevenDaysAweek: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'branches',
    timestamps: true
  });
};
