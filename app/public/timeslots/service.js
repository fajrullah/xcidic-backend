/**
 * Service
 * @author Fajrul
 * All Logic defin HERE
 */
const { Op, Sequelize, moment } = require('../../../core')
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
        const momentDate = moment.utc(value)
        const startOfDay = momentDate.clone().startOf('day')
        const endOfDay = momentDate.clone().endOf('day')
        objCondition.createdAt = {
          [Op.gte]: startOfDay,
          [Op.lt]: endOfDay
        }
      }

      if (key !== 'price' && key !== 'createdAt' && key !== 'longitude' && key !== 'latitude') {
        objCondition[key] = {
          [Op.like]: `%${value}%`
        }
      }
    })
    const { longitude, latitude } = data
    const location = Sequelize.literal(`ST_GeomFromText('POINT(${longitude} ${latitude})', 4326)`)
    const distance = Sequelize.fn(
      'ST_DistanceSphere',
      Sequelize.literal('location::geometry'),
      location
    )
    objCondition.options = {
      // attributes: [[Sequelize.fn('ST_Distance', Sequelize.literal('geolocation'), location), 'distance']],
      attributes: {
        include: [
          [
            Sequelize.fn(
              'ST_Distance',
              Sequelize.col('cord'),
              Sequelize.fn('ST_MakePoint', longitude, latitude)
            ),
            'distance'
          ]
        ]
      },
      order: Sequelize.literal('distance ASC')
    }

    objCondition.distance = Sequelize.where(
      Sequelize.fn(
        'ST_DWithin',
        Sequelize.col('cord'),
        Sequelize.fn('ST_MakePoint', longitude, latitude),
        10000
      ),
      true
    )
    //   attributes: [[Sequelize.fn('ST_Distance_Sphere', Sequelize.literal('geolocation'), location),'distance']],
    //   .findAll({
    //     attributes: [[distance, 'distance']],
    //     where: sequelize.where(distance, { [Op.lte]: 10 }),
    //     order: [
    //         [sequelize.literal('"distance"'), 'ASC'], // for smallest distance at top
    //     ],
    // })
    const result = await Models.searchBranches(data)
    return result
  }
}

module.exports = new TimeslotService()
