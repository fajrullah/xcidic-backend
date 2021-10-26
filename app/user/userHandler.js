'use strict'
const {
  bcrypt,
  callback
} = require('../../core')

const generateHash = async (req, res, next) => {
  try {
    const { value, apiKey } = req.body
    if (apiKey !== '^*1(09_88zx@&dzAPolLrt194') {

    }
    bcrypt.hash(value, 10, (_err, hash) => {
      return res.json({
        hash
      })
    })
  } catch (error) {
    next()
  }
}
module.exports = {
  generateHash
}
