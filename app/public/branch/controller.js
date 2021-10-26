/**
 * Controller
 * controller for sending response to Client
 * No Logic Here
 * @author
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

  // async getConsumerBranchByID (req, res, next) {
  //   try {
  //     const data = req.query
  //     const result = await BranchHandler.getConsumerBranchByID(data)
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async getBranchByID (req, res, next) {
  //   try {
  //     const data = req.query
  //     const result = await BranchHandler.getBranchByID(data)
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async getMasterBranchs (req, res, next) {
  //   try {
  //     const data = req.query
  //     const result = await BranchHandler.getMasterBranchs(data)
  //     return callback(res, result, { status: 200, pagination: true })
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async createConsumerBranchs (req, res, next) {
  //   try {
  //     const data = req.body
  //     const result = await BranchHandler.createConsumerBranchs(data)
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async consumerBranchImages (req, res, next) {
  //   try {
  //     const files = req.files
  //     const consumerBranchID = req.body.consumerBranchID
  //     const result = await BranchHandler.uploadConsumerBranchImages({ consumerBranchID, files })
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async updateMasterBranch (req, res, next) {
  //   try {
  //     const data = req.body
  //     const result = await BranchHandler.updateMasterBranch(data)
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async updateConsumerBranch (req, res, next) {
  //   try {
  //     const data = req.body
  //     const result = await BranchHandler.updateConsumerBranch(data)
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async masterUploadImages (req, res, next) {
  //   try {
  //     const files = req.files
  //     const BranchID = req.body.BranchID
  //     const result = await BranchHandler.masterUploadImages({ BranchID, files })
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  // async createMasterBranchs (req, res, next) {
  //   try {
  //     const data = req.body
  //     const result = await BranchHandler.createMasterBranchs(data)
  //     return callback(res, result)
  //   } catch (err) {
  //     next(err)
  //   }
  // }
}

module.exports = new BranchController()
