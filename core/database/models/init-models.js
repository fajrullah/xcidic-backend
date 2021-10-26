const DataTypes = require('sequelize').DataTypes
const _consumerProducts = require('./consumer_products')
let _users = require('./users')

function initModels (sequelize) {
  const consmerProducts = _consumerProducts(sequelize, DataTypes)

  let users = _users(sequelize, DataTypes)

  return {

    consmerProducts,

    users
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
