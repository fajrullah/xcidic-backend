'use strict'
const { sequelize } = require('../../core/database')
const {
  admin_users: Admin
} = sequelize.models

const findAdmin = async (where = {}) => {
  try {
    const result = await Admin.findOne({
      where
    })
    return result
  } catch (err) {
    return err
  }
}

module.exports = {
  findAdmin
}
