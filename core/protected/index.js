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
    if (token === 'hereIStokenDummy') {
      next()
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
  if (errors.isEmpty()) {
    return next()
  }
  return res.status(422).json({ errors: errors.array() })
}

module.exports = {
  checkToken,
  isEntityFalse
}
