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

  // async findMasterBranchs (where) {
  //   const { page = 1, size = 10, ...rest } = where
  //   const objCondition = {}
  //   Object.keys(rest).forEach(key => {
  //     const value = rest[key]
  //     objCondition[key] = {
  //       [Op.like]: `%${value}%`
  //     }
  //   })
  //   const from = (page - 1) * size

  //   const result = await Branchs.findAndCountAll({
  //     distinct: true,
  //     offset: parseInt(from),
  //     limit: parseInt(size),
  //     where: {
  //       ...objCondition
  //     },
  //     include: [{
  //       as: 'Branch_codes',
  //       model: BranchCodes
  //     }, {
  //       as: 'Branch_prices',
  //       model: BranchPrices
  //     }],
  //     order: [
  //       ['id', 'DESC']
  //     ]
  //   })
  //   return result
  // }

  // async consumerCreateAssets (data) {
  //   const result = await ConsumerBranchAssets.bulkCreate(data)
  //   return result
  // }

  // async createConsumerBranchs (data) {
  //   const { priceActiveStartDate, priceActiveEndDate, ...rest } = data
  //   data.languageID = 1
  //   data.consumer_Branch_languages = data
  //   data.consumer_Branch_prices = {
  //     ...rest,
  //     startDate: priceActiveEndDate,
  //     endDate: priceActiveStartDate
  //   }
  //   const result = await ConsumerBranchs.create(data, {
  //     include: [{
  //       as: 'consumer_Branch_languages',
  //       model: ConsumerBranchLanguages
  //     }, {

  //       as: 'consumer_Branch_prices',
  //       model: ConsumerBranchPrices

  //     }]
  //   })
  //   return result
  // }

  // async createMasterBranchs (data) {
  //   const [BranchCode, lastNumber, prefix] = await this.getBranchCodes()
  //   data.BranchCode = BranchCode
  //   data.Branch_codes = {
  //     lastNumber, prefix
  //   }
  //   const result = await Branchs.create(data, {
  //     include: [{
  //       as: 'Branch_codes',
  //       model: BranchCodes
  //     }]
  //   })

  //   return result
  // }

  // async isConsumerBranchExist (where) {
  //   const result = await ConsumerBranchs.findOne({
  //     where
  //   })
  //   return result
  // }

  // async getBranchCodes () {
  //   const lastCodes = await BranchCodes.findOne({
  //     where: {},
  //     raw: true,
  //     order: [
  //       ['id', 'DESC']
  //     ]
  //   })
  //   const { lastNumber = 0, prefix } = lastCodes
  //   let initialPrefix = prefix
  //   const initialNumber = (parseInt(lastNumber) || 0) + 1
  //   if (!prefix) {
  //     initialPrefix = constant.prefix.Branchs
  //   }
  //   const zeroFillLength = parseInt(constant.prefix.zerofillLength || 6)
  //   const char = zeroFillLength - parseInt(initialNumber.toString().length)
  //   const zerofill = new Array(char).fill(0)
  //   zerofill.push(initialNumber)
  //   const BranchCodes = `${initialPrefix}${zerofill.join('')}`
  //   return [BranchCodes, initialNumber, initialPrefix]
  // }

  // async findBranchByID (where) {
  //   const { consumerBranchID: id } = where

  //   const result = await ConsumerBranchs.findOne({
  //     where: {
  //       id
  //     },
  //     include: [{
  //       as: 'consumer_Branch_prices',
  //       model: ConsumerBranchPrices
  //     }, {
  //       as: 'consumer_Branch_languages',
  //       model: ConsumerBranchLanguages
  //     }, {
  //       as: 'consumer_Branch_category_relations',
  //       model: ConsumerBranchCategoryRelations
  //     }],
  //     order: [
  //       ['id', 'DESC']
  //     ]
  //   })
  //   return result
  // }

  // async findMasterBranchByID (where) {
  //   const { BranchID: id } = where
  //   const result = await Branchs.findOne({
  //     where: {
  //       id
  //     },
  //     include: [{
  //       as: 'Branch_codes',
  //       model: BranchCodes
  //     }, {
  //       as: 'Branch_prices',
  //       model: BranchPrices
  //     }],
  //     order: [
  //       ['id', 'DESC']
  //     ]
  //   })
  //   return result
  // }

  // async updateMasterBranch (where) {
  //   const { BranchID: id, ...rest } = where
  //   const result = await Branchs.update(
  //     { ...rest },
  //     {
  //       returning: true,
  //       plain: true,
  //       where: {
  //         id
  //       }
  //     }
  //   )
  //   return result
  // }

  // async updateConsumerBranch (where) {
  //   const { consumerBranchID: id, ...rest } = where
  //   const result = await ConsumerBranchs.update(
  //     { ...rest },
  //     {
  //       returning: true,
  //       plain: true,
  //       where: {
  //         id
  //       }
  //     }
  //   )
  //   return result
  // }
}

module.exports = new BranchModel()
