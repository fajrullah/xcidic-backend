'use strict'
const { callback } = require('../../core')
const SubHandler = require('./subHandler')
class SubController {
  async getSub (req, res, next) {
    try {
      const result = await SubHandler.getSub()
      return callback(res, result)
    } catch (error) {
      next(error)
    }
  }

  async update (req, res, next) {
    try {
      const body = req.body
      const result = await SubHandler.updateSub(body)
      return callback(res, result)
    } catch (error) {
      next(error)
    }
  }
}
module.exports = new SubController()
