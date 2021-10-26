const jwt = require('jsonwebtoken')
const config = require('../config')
const { validationResult } = require('express-validator')

const checkToken = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.sendStatus(422)
  } else {
    let token = req.headers['x-access-token'] || req.headers.authorization
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    }
    if (token) {
      jwt.verify(token, config.secret,
        { issuer: config.issuer, subject: config.subject }, async (err, decoded) => {
          if (err) {
            return res.status(403).json({
              success: false,
              msgCode: 'Token is not valid'
            })
          } else {
            const payload = {
              id: decoded.id
            }
            const token = jwt.sign(payload, config.secret, {
              issuer: config.issuer,
              subject: config.subject,
              expiresIn: 60 * 5
            })
            res.locals = {
              accessToken: token,
              expiresIn: '5m',
              tokenType: 'Bearer'
            }
            next()
          }
        })
    } else {
      return res.status(403).json({
        success: false,
        msgCode: 'Auth token is not supplied'
      })
    }
  }
}

const isEntityFalse = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json(errors)
  } else {
    next()
  }
}

module.exports = {
  checkToken,
  isEntityFalse
}
