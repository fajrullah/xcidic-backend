'use strict'
/**
 * Define from modules
 */

// const short = require('short-uuid')
// const moment = require('moment')
// const bcrypt = require('bcryptjs')
// const { v4: uuidv4 } = require('uuid')
// /**
//  * Define requirement files here
//  */
const { sequelize } = require('./database')
const { clientError400, clientErrorHandler, logErrors } = require('./error')
const { isEntityFalse, checkToken } = require('./protected')
const { fieldCheck, idCheck, schemaCheck } = require('./helper/middleware')
const {
  generateToken
  // getAccessToken
} = require('./helper/authentication')
// const upload = require('./helper/storage')
// // const recycle = require('./recycle')
// // const moved = require('./moved')
// // const { salt, privKey } = require('./key')
// const { mailNotification } = require('./helper/mail')
// // const { sendSms } = require('./sms')
// // const { emailTemplate } = require('./template')
// const getRoles = require('./helper/roles')
// const randomnumber = require('random-number')

/**
 * Loader for Model
 * Define All Model Here
 */
const {
  branches: Branches
} = sequelize.models

/**
 * @returns { Obj }
 */
module.exports = {
  /**
   * Configuration
   */
  config: require('./config'),
  constant: require('./constant'),
  /**
   * General Route
   */
  publicRoute: require('./route/publicRoute'),
  protectedRoute: require('./route/protectedRoute'),

  /**
   * export models
   */
  Branches,
  // Admin,
  // // /**
  // //  * export function
  // //  */
  // // Op,
  // short,
  // upload,
  // bcrypt,
  // Sequelize,
  // moment,
  // uuidv4,
  // // crypto,
  // /**
  //  * client response
  //  */
  // // config,
  // // emailTemplate,
  // // orderPaymentCash,
  // mailNotification,
  // sendEmail,
  // sendSms,
  // salt,
  // privKey,
  // recycle,
  // moved,
  generateToken,
  // getAccessToken,
  response: require('./helper/response'),
  SequelizeCustomize: require('./helper/sequelizecustomize'),
  // fieldCheck,
  // idCheck,
  schemaCheck,
  // isPayloadContainsID: [
  //   idCheck,
  //   isEntityFalse
  // ],
  // getExtension: (fileName) => {
  //   const splittingName = fileName.split('.')
  //   const last = splittingName.length
  //   return splittingName[last - 1]
  // },
  // // randomNumber: (max = 999999, min = 100000, integer = true) => randomnumber({ max, min, integer }),
  // getRoles,
  checkToken,
  isEntityFalse,
  clientError400,
  clientErrorHandler,
  logErrors
}
