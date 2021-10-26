module.exports = function (sequelize, DataTypes) {
  return sequelize.define('timeslots', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    mealPlanName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 15
    },
    booking: {
      type: DataTypes.INTEGER(11),
      defaultValue: 0
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    branchID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'branches',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'timeslots',
    timestamps: true
  })
};
