/**
 * Controller
 * controller for sending response to Client
 * No Logic Here
 * @author
 */
const { response } = require('../../../core')
const Service = require('./service')
class TimeslotController {
  async getTimeslots (req, res, next) {
    try {
      const data = req.query
      const result = await Service.findTimeslots(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }

  async createTimeslots (req, res, next) {
    try {
      const data = req.body
      const result = await Service.createTimeslots(data)
      return response(res, result, 201)
    } catch (err) {
      next(err)
    }
  }

  async createReservations (req, res, next) {
    try {
      const data = req.body
      const result = await Service.createReservations(data)
      return response(res, result, 201)
    } catch (err) {
      next(err)
    }
  }

  async createDemands (req, res, next) {
    try {
      const data = req.body
      const result = await Service.createDemands(data)
      return response(res, result, 201)
    } catch (err) {
      next(err)
    }
  }

  async updateTimeslots (req, res, next) {
    try {
      const data = req.body
      const result = await Service.updateTimeslots(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }

  async deactiveOnDemands (req, res, next) {
    try {
      const data = req.body
      const result = await Service.deactiveOnDemands(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }

  async deleteTimeslots (req, res, next) {
    try {
      const data = req.body
      const result = await Service.deleteTimeslots(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }

  async searchBranches (req, res, next) {
    try {
      const data = req.query
      const result = await Service.searchBranches(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new TimeslotController()
