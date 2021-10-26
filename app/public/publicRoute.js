'use strict'

/**
 * Public Route
 * No Authentication
* @author Fajrul
 */
// const { isEntityFalse, clientError400 } = require('../../core')
// const { loginHandler, loginMiddleware } = require('./login')
module.exports = (app) => {
  /**
   * Home Page
   */
  app.get('/', (req, res, next) => res.json({
    status: 'It Works'
  }))

  // /**
  //  * Login Routes
  //  */
  // app.post('/login', [loginMiddleware.loginCheck, isEntityFalse], loginHandler.login, clientError400)
}
