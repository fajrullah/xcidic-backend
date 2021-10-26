module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demands', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timeslotID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'timeslots',
        key: 'id'
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'demands',
    timestamps: true
  });
};
