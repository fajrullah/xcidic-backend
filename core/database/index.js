'use strict'
/**
 * Connection Pool
 */
const Sequelize = require('sequelize')
const config = require('../config')
const check = require('../config/check')
const { initModels } = require('./models/init-models')
const sequelize = new Sequelize(config.db_url)


sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    check()
  })
  .catch(err => console.error('Unable to connect to the database:', err))

sequelize.sync({ force: true })
  .then(() => {
    console.log('#### Generate The Table Completed ####')
    check()
  })
  .catch(_err => console.log(_err, '#### Something Wrong ####'))

initModels(sequelize)
module.exports = { sequelize }
