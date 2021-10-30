/**
 * Middleware
 * @author Fajrul
 */
const { body } = require('express-validator')

const id = [
  body('id').notEmpty().bail().withMessage('id is required')
]

const create = [
  body('name').notEmpty().bail().withMessage('name is required')
]

module.exports = {
  id,
  create
}
