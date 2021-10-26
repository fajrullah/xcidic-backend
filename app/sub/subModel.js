'use strict'
const Sub = require('../../core/database/models/Forms')
class SubModel {
  async findAllSub () {
    const result = await Sub.find()
    return result
  }

  async updateSub (data) {
    const { _id, ...rest } = data
    const result = await Sub
      .updateOne({ _id }, { $set: { ...rest } })
    return result
  }
}

module.exports = new SubModel()
