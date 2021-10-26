'use strict'
const { check } = require('express-validator')
module.exports = {
  emailCheck: [
    check('email').isEmail().bail().exists().bail()
  ],
  loginCheck: [
    check('email').bail().exists().bail(),
    check('password').exists().bail()
  ],
  refreshTokenCheck: [
    check('refreshToken').exists().bail(),
    check('email').exists().bail(),
    check('roleid').exists().bail()
  ]
}
