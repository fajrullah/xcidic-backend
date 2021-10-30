/**
 * Controller
 * controller for sending response to Client
 * No Logic Here
 * @author Fajrul
 */
const { response } = require('../../../core')
const Service = require('./service')
class BranchController {
  async getBranches (req, res, next) {
    try {
      const data = req.query
      const result = await Service.findBranch(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }

  async createBranches (req, res, next) {
    try {
      const data = req.body
      const result = await Service.createBranch(data)
      return response(res, result, 201)
    } catch (err) {
      next(err)
    }
  }

  async updateBranches (req, res, next) {
    try {
      const data = req.body
      const result = await Service.updateBranch(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }

  async deleteBranches (req, res, next) {
    try {
      const data = req.body
      const result = await Service.deleteBranch(data)
      return response(res, result)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new BranchController()
