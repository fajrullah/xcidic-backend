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
    .route('/timeslots')
    .get(Controller.getTimeslots)
    .post([middleware.createTimeslots, isEntityFalse], Controller.createTimeslots)
    .put([middleware.id, isEntityFalse], Controller.updateTimeslots)
    .delete([middleware.id, isEntityFalse], Controller.deleteTimeslots)

  app
    .route('/demands')
    .post([middleware.createDemands, isEntityFalse], Controller.createDemands)
    .delete([middleware.timeslotID, isEntityFalse], Controller.deactiveOnDemands)

  app
    .route('/reservations')
    .post([middleware.timeslotID, isEntityFalse], Controller.createReservations)

  app
    .route('/timeslots/search')
    .get(Controller.searchBranches)
}
