'use strict'
const { check, body } = require('express-validator')
const hashingCheck = [
  check('apiKey').exists().bail(),
  check('value').exists()
]
const productID = [
  body('productID').notEmpty().bail().withMessage('productID is required')
]

const consumerProductID = [
  body('consumerProductID').notEmpty().bail().withMessage('consumerProductID is required')
]
module.exports = {
  hashingCheck,
  productID,
  consumerProductID
}
