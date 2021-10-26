'use strict'
const { sequelize } = require('../database')
const { tblrole: Role } = sequelize.models
const short = require('short-uuid')
module.exports = async (role = 'user') => {
  const result = await Role.findOne({
    where: {
      role
    }
  })
  if (!result) {
    const result = await Role.create({
      id: short.generate(),
      role
    })
    return result
  }
  return result
}
