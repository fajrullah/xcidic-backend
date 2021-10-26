/**
 * Middleware
 * @author Fajrul
 */
const { body } = require('express-validator')

const id = [
  body('id').notEmpty().bail().withMessage('id is required')
]

const name = [
  body('name').notEmpty().bail().withMessage('name is required')
]

module.exports = {
  id,
  name
}
