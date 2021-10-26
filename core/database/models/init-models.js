const DataTypes = require('sequelize').DataTypes
const _branches = require('./branches')

function initModels (sequelize) {
  const branches = _branches(sequelize, DataTypes)
  return {
    branches
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
