'use strict'

/**
 * Public Route
 * No Authentication
 * @author Fajrul
 */
const { isEntityFalse } = require('../../../core')
const middleware = require('./middleware')
const Controller = require('./controller')
const INITIAL_ROUTES = {
  branches: '/branches'
}
module.exports = (app) => {
  app
    .route(INITIAL_ROUTES.branches)
    .get(Controller.getBranches)
    .post([middleware.create, isEntityFalse], Controller.createBranches)
    .put([middleware.id, isEntityFalse], Controller.updateBranches)
    .delete([middleware.id, isEntityFalse], Controller.deleteBranches)
}
