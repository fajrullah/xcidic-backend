'use strict'

/**
 * Public Route
 * No Authentication
 * @author Fajrul
 */
const { isEntityFalse } = require('../../../core')
const middleware = require('./middleware')
const Controller = require('./controller')
module.exports = (app) => {
  app
    .route('/branches')
    .get(Controller.getBranches)
    .post([middleware.name, isEntityFalse], Controller.createBranches)
    .put([middleware.id, isEntityFalse], Controller.updateBranches)
    .delete([middleware.id, isEntityFalse], Controller.deleteBranches)
}
