'use strict'

const { clientErrorHandler } = require('./error')
const { isEntityFalse, checkToken } = require('./protected')
const { schemaCheck } = require('./helper/middleware')

/**
 * @returns { Obj }
 */
module.exports = {
  publicRoute: require('./route/publicRoute'),
  protectedRoute: require('./route/protectedRoute'),
  callback: require('./helper/callback'),
  checkToken,
  isEntityFalse,
  clientErrorHandler,
  schemaCheck
}
