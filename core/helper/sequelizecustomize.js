'use stict'
/**
 * Function for creating where clause using SEQUELIZE
 * WHI
 */
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class SequelizeCustomize {
  // condition for each property LIKE
  whereConditionLike (data = {}) {
    const obj = {}
    Object.keys(data).map((key) => {
      obj[key] = {
        [Op.like]: `%${data[key]}%`
      }
    })
    return obj
  }
}
module.exports = new SequelizeCustomize()
