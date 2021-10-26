const DataTypes = require('sequelize').DataTypes
const _branches = require('./branches')
const _timeslots = require('./timeslots')
const _demands = require('./demands')
const _reservations = require('./reservations')

function initModels (sequelize) {
  const branches = _branches(sequelize, DataTypes)
  const timeslots = _timeslots(sequelize, DataTypes)
  const demands = _demands(sequelize, DataTypes)
  const reservations = _reservations(sequelize, DataTypes)

  /**
   * Define relations here
   */

  branches.hasMany(timeslots, { foreignKey: 'branchID', as: 'branchesTimeslots' })
  timeslots.belongsTo(branches, {
    as: 'detailBranches',
    foreignKey: 'branchID',
    constraints: false
  })

  timeslots.hasOne(demands, { foreignKey: 'timeslotID', as: 'ondemands' })
  demands.belongsTo(timeslots, {
    as: 'detailTimeslots',
    foreignKey: 'timeslotID',
    constraints: false
  })

  timeslots.hasMany(reservations, { foreignKey: 'timeslotID', as: 'reservations' })
  reservations.belongsTo(timeslots, {
    as: 'detailTimeslots',
    foreignKey: 'timeslotID',
    constraints: false
  })

  return {
    reservations,
    demands,
    timeslots,
    branches
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
