/**
 * Service
 * @author Fajrul
 * All Logic defin HERE
 */
const Models = require('./models')
class BranchService {
  async findBranch (data) {
    const result = await Models.findBranch({
      where: {
        ...data,
        isActive: true
      }
    })
    return result
  }

  async createBranch (data) {
    const { longitude, latitude } = data
    const assignNew = data
    if (longitude && latitude) {
      assignNew.cord = { type: 'Point', coordinates: [longitude, latitude] }
    }
    const result = await Models.createBranch(assignNew)
    return result
  }

  async updateBranch (data) {
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
    const result = await Models.updateBranch(set, options)
    return result
  }

  async deleteBranch (data) {
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
      const result = await Models.updateBranch(set, options)
      return result
    } else {
      const where = {
        id
      }
      const forceDelete = await Models.forceDelete({ where })
      return forceDelete
    }
  }
}

module.exports = new BranchService()
