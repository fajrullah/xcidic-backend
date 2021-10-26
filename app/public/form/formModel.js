'use strict'
const Forms = require('../../../core/database/models/Forms')

const create = async (where = {}) => {
  const result = await Forms.insertMany(where)
  return result
}

const check = async (where = {}) => {
  const result = await Forms.findOne(where)
  return result
}

module.exports = {
  create,
  check
}
