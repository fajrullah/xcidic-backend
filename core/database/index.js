'use strict'
/**
 * Connection Pool
 */
const Sequelize = require('sequelize')
const config = require('../config')
const check = require('../config/check')
const { initModels } = require('./models/init-models')
// const sequelize = new Sequelize('postgres://qydpxkqrqxurcu:5c603f72a3c25aa6ecbe42c5cd61606f3bb891148d5386b262e3d56de81b7951@ec2-3-217-234-137.compute-1.amazonaws.com:5432/d1a8ectr80o8pu')

const sequelize = new Sequelize(config.db_url, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: true
  }
})

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
