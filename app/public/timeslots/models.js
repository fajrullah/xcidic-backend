/**
 * Models
 * No Logic Here
 * Keep Models clean
 * @author Fajrul
 */

// Call all models from core
const { Timeslots, Demands, Reservations, Branches, Op, Sequelize } = require('../../../core')

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
    const { options, longitude, latitude, ...rest } = data
    // const { attributes, order } = options
    // // const result = await Branches.findAll({
    // //   where: rest,
    // //   attributes,
    // //   include: [{
    // //     as: 'branchesTimeslots',
    // //     model: Timeslots,
    // //     include: [{
    // //       as: 'ondemands',
    // //       model: Demands
    // //     }]
    // //   }],
    // //   order: [
    // //     order,
    // //     // ['id', 'ASC'],
    // //     // ['branchesTimeslots', 'startTime', 'ASC'],
    // //     // ['branchesTimeslots', { model: Demands, as: 'ondemands' }, 'id', 'ASC']
    // //   ]
    // // })

    // // const distance = Sequelize.fn('ST_Distance',
    // //   Sequelize.cast(Sequelize.fn('ST_SetSRID', Sequelize.fn('ST_MakePoint', longitude, latitude), 4326), 'geography'),
    // //   Sequelize.cast(Sequelize.fn('ST_SetSRID', 'cord', 4326), 'geography'))
    console.log(latitude, longitude)

    const location = Sequelize.literal(`ST_GeomFromText('POINT(${longitude} ${latitude})', 4326)`)
    const distance = Sequelize.fn('ST_DistanceSphere', Sequelize.col('cord'), location)
    const result = await Branches.findAll({
      attributes: {
        include: [[distance, 'distance']]
      },
      where: Sequelize.where(distance, { [Op.lte]: 10 }),
      order: distance
    })
    return result
  }
}

module.exports = new TimeslotsModel()
