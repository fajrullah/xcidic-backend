/**
 * Middleware
 * @author Fajrul
 */
const { body } = require('express-validator')

const id = [
  body('id').notEmpty().bail().withMessage('id is required')
]

const timeslotID = [
  body('timeslotID').notEmpty().bail().withMessage('timeslotID is required')
]

const createTimeslots = [
  body('branchID').notEmpty().bail().withMessage('branchID is required'),
  body('mealPlanName').notEmpty().bail().withMessage('mealPlanName is required'),
  body('startTime').notEmpty().bail().withMessage('startTime is required'),
  body('endTime').notEmpty().bail().withMessage('endTime is required'),
  body('day').notEmpty().bail().withMessage('day is required'),
  body('price').notEmpty().bail().withMessage('price is required')
]

const createDemands = [
  body('timeslotID').notEmpty().bail().withMessage('timeslotID is required'),
  body('price').notEmpty().bail().withMessage('price is required')
]

module.exports = {
  timeslotID,
  id,
  createTimeslots,
  createDemands
}
