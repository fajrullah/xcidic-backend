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
  timeslots: '/timeslots',
  demands: '/demands',
  reservations: '/reservations',
  search: '/timeslots/search'
}

module.exports = (app) => {
  app
    .route(INITIAL_ROUTES.timeslots)
    .get(Controller.getTimeslots)
    .post([middleware.createTimeslots, isEntityFalse], Controller.createTimeslots)
    .put([middleware.id, isEntityFalse], Controller.updateTimeslots)
    .delete([middleware.id, isEntityFalse], Controller.deleteTimeslots)

  app
    .route(INITIAL_ROUTES.demands)
    .post([middleware.createDemands, isEntityFalse], Controller.createDemands)
    .delete([middleware.timeslotID, isEntityFalse], Controller.deactiveOnDemands)

  app
    .route(INITIAL_ROUTES.reservations)
    .post([middleware.timeslotID, isEntityFalse], Controller.createReservations)

  app
    .route(INITIAL_ROUTES.search)
    .get(Controller.searchBranches)
}
