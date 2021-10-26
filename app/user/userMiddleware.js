'use strict'
const { check } = require('express-validator')
const hashingCheck = [
  check('apiKey').exists().bail(),
  check('value').exists()
]
module.exports = {
  hashingCheck
}
