'use strict'

/**
 * Public Route
 * No Authentication
 * @author Fajrul
 */
// const { isEntityFalse } = require('../../core')
// const { formController, formMiddleware } = require('./form')
module.exports = (app) => {
  /**
   * Home Page
   */
  app.get('/', (req, res, next) => res.json({
    status: 'It Works'
  }))

  // /**
  //  * form Routes
  //  */

  // app.post('/form', [formMiddleware.formCheck, isEntityFalse], formController.create)

  // app.post('/login', [formMiddleware.loginCheck, isEntityFalse], formController.login)
}
