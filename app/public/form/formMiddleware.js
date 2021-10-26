'use strict'
const { check } = require('express-validator')
module.exports = {
  formCheck: [
    check('userId').exists().bail(),
    check('userDeliveryAddress').exists().bail()
  ],
  loginCheck: [
    check('email').bail().exists().bail(),
    check('password').exists().bail()
  ]
}
