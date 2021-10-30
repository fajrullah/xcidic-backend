'use strict'
/**
 * Define from modules
 */

const moment = require('moment')
const Sequelize = require('sequelize')
const { sequelize } = require('./database')
const { clientError400, clientErrorHandler, logErrors } = require('./error')
const { isEntityFalse } = require('./protected')

/**
 * Loader for Model
 * Define All Model Here
 */
const {
  timeslots: Timeslots,
  demands: Demands,
  reservations: Reservations,
  branches: Branches
} = sequelize.models
const Op = Sequelize.Op

module.exports = {
  config: require('./config'),
  publicRoute: require('./route/publicRoute'),
  Reservations,
  Demands,
  Branches,
  Timeslots,
  Op,
  Sequelize,
  moment,
  response: require('./helper/response'),
  isEntityFalse,
  clientError400,
  clientErrorHandler,
  logErrors
}
