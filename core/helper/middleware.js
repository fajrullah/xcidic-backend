'use strict'

const { check, header } = require('express-validator')
const idCheck = [
  check('id').exists().bail()
]

const fieldCheck = [
  check('field').exists().bail(),
  check('value').exists().bail()
]

const schemaCheck = [
  header('Authorization').exists().bail()
]

module.exports = {
  schemaCheck,
  idCheck,
  fieldCheck
}
