'use strict'
const INITIAL = {
  status: 200, pagination: false
}
module.exports = (res, result, options = INITIAL) => {
  const data = options.pagination ? { ...result } : { result }

  return res.status(options.status || 200).json({

    msgCode: 'success',

    token: {

      accessToken: res.locals.accessToken,

      expiresIn: res.locals.expiresIn,

      tokenType: res.locals.tokenType
    },

    ...data
  })
}
