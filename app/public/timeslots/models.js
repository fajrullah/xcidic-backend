/**
 * Models
 * No Logic Here
 * Keep Models clean
 * @author Fajrul
 */

// Call all models from core
const { Timeslots, Demands, Reservations, Branches, Op } = require('../../../core')

class TimeslotsModel {
  async findTimeslots (where) {
    const result = await Timeslots.findAll(where)
    return result
  }

  async findOneTimeslot (where) {
    const result = await Timeslots.findOne(where)
    return result
  }

  async createTimeslots (data) {
    const result = await Timeslots.create(data)
    return result
  }

  async createReservations (data) {
    const result = await Reservations.create(data)
    return result
  }

  async createDemands (data) {
    const result = await Demands.create(data)
    return result
  }

  async updateTimeslots (set, options) {
    const result = await Timeslots.update(set, options)
    return result
  }

  async deactiveOnDemands (where) {
    const result = await Demands.destroy(where)
    return result
  }

  async deleteTimeslots (set, options) {
    const result = await Timeslots.update(set, options)
    return result
  }

  async forceDelete (where) {
    const result = await Timeslots.destroy(where)
    return result
  }

  async searchBranches (data) {
    const { distance, distanceWhere, attributes, ...where } = data

    const order = [
      ['branchesTimeslots', 'startTime', 'ASC'],
      ['branchesTimeslots', { model: Demands, as: 'ondemands' }, 'id', 'ASC']
    ]

    if (distance) {
      order.push(distance)
    }

    const options = {
      order
    }

    if (attributes) {
      options.attributes = attributes
    }

    const result = await Branches.findAll({
      include: [{
        as: 'branchesTimeslots',
        model: Timeslots,
        include: [{
          as: 'ondemands',
          model: Demands
        }]
      }],
      where: {
        [Op.and]: [distanceWhere, where]
      },
      ...options
    })
    return result
  }
}

module.exports = new TimeslotsModel()
