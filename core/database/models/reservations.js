module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    timeslotID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'timeslots',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'reservations',
    timestamps: true
  });
};
