'use strict'
const SubModel = require('./subModel')
class SubHandler {
  /**
   *
   * @param {obj} params
   */
  async getSub (params) {
    const data = await SubModel.findAllSub()
    return data
  }

  async updateSub (params) {
    const data = await SubModel.updateSub(params)
    return data
  }
}

module.exports = new SubHandler()
