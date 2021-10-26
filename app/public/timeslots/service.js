/**
 * Service
 * @author Fajrul
 * All Logic defin HERE
 */
const { Op, Sequelize } = require('../../../core')
const Models = require('./models')
class TimeslotService {
  async findTimeslots (data) {
    const result = await Models.findTimeslots({
      where: {
        ...data,
        capacity: {
          [Op.gt]: Sequelize.col('booking')
        },
        isActive: true
      }
    })
    return result
  }

  async createReservations (data) {
    const { timeslotID } = data
    const find = await Models.findOneTimeslot({ where: { id: timeslotID } })
    if (find) {
      const booking = find.booking
      this.updateTimeslots({ id: timeslotID, booking: booking + 1 })
    }
    const result = await Models.createReservations(data)
    return result
  }

  async createTimeslots (data) {
    const result = await Models.createTimeslots(data)
    return result
  }

  async createDemands (data) {
    const result = await Models.createDemands(data)
    return result
  }

  async updateTimeslots (data) {
    const { id, ...rest } = data
    const set = {
      ...rest
    }
    const options = {
      returning: true,
      plain: true,
      where: {
        id
      }
    }
    const result = await Models.updateTimeslots(set, options)
    return result
  }

  async deactiveOnDemands (data) {
    const { timeslotID } = data
    const result = await Models.deactiveOnDemands({
      where: {
        timeslotID
      }
    })
    return result
  }

  async deleteTimeslots (data) {
    const { id, isSafeDelete = true } = data

    if (isSafeDelete) {
      const set = {
        isActive: false
      }
      const options = {
        returning: true,
        plain: true,
        where: {
          id
        }
      }
      const result = await Models.updateTimeslots(set, options)
      return result
    } else {
      const where = {
        id
      }
      const forceDelete = await Models.forceDelete({ where })
      return forceDelete
    }
  }

  async searchBranches (data = {}) {
    const objCondition = {}
    Object.keys(data).forEach(key => {
      const value = data[key]
      if (key === 'price') {
        objCondition['$branchesTimeslots.price$'] = {
          [Op.eq]: value
        }
      }

      if (key === 'createdAt') {
        objCondition.createdAt = {
          [Op.gte]: value
        }
      }

      if (key !== 'price' || key !== 'createdAt') {
        objCondition[key] = {
          [Op.like]: `%${value}%`
        }
      }
    })

    const result = await Models.searchBranches(objCondition)
    return result
  }
}

module.exports = new TimeslotService()
