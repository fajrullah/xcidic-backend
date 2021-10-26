/**
 * Models
 * No Logic Here
 * Keep Models clean
 * @author Fajrul
 */

// Call all models from core
const { Branches } = require('../../../core')

class BranchModel {
  async findBranch (where) {
    const result = await Branches.findAll(where)
    return result
  }

  async createBranch (data) {
    const result = await Branches.create(data)
    return result
  }

  async updateBranch (set, options) {
    const result = await Branches.update(set, options)
    return result
  }

  async deleteBranch (set, options) {
    const result = await Branches.update(set, options)
    return result
  }

  async forceDelete (where) {
    const result = await Branches.destroy(where)
    return result
  }
}

module.exports = new BranchModel()
