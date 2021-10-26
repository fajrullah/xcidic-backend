'use strict'
const { sequelize } = require('../../core/database')
const {
  products: Products,
  product_codes: ProductCodes,
  product_prices: ProductPrices,
  consumer_products: ConsumerProducts,
  supplier_product_costs: SupplierProductCosts,
  consumer_product_languages: ConsumerProductLanguages,
  consumer_product_prices: ConsumerProductPrices,
  consumer_product_assets: ConsumerProductAssets,
  consumer_product_bundles: ConsumerProductBundles,
  consumer_product_categories: ConsumerProductCategories,
  consumer_product_category_relations: ConsumerProductCategoryRelations
} = sequelize.models

const INITIAL_product = {
  id: 1
}
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { constant } = require('../../core')
class ProductModel {
  async findConsumerProducts (where) {
    const { page = 1, size = 10, ...rest } = where
    const objCondition = {}
    Object.keys(rest).forEach(key => {
      const value = rest[key]
      objCondition[key] = {
        [Op.like]: `%${value}%`
      }
    })
    const from = (page - 1) * size

    const result = await ConsumerProducts.findAndCountAll({
      distinct: true,
      offset: parseInt(from),
      limit: parseInt(size),
      where: {
        ...objCondition
      },
      include: [{
        as: 'consumer_product_prices',
        model: ConsumerProductPrices
      }, {
        as: 'consumer_product_languages',
        model: ConsumerProductLanguages
      }, {
        as: 'consumer_product_category_relations',
        model: ConsumerProductCategoryRelations
      }],
      order: [
        ['id', 'DESC']
      ]
    })
    return result
  }

  async findMasterProducts (where) {
    const { page = 1, size = 10, ...rest } = where
    const objCondition = {}
    Object.keys(rest).forEach(key => {
      const value = rest[key]
      objCondition[key] = {
        [Op.like]: `%${value}%`
      }
    })
    const from = (page - 1) * size

    const result = await Products.findAndCountAll({
      distinct: true,
      offset: parseInt(from),
      limit: parseInt(size),
      where: {
        ...objCondition
      },
      include: [{
        as: 'product_codes',
        model: ProductCodes
      }, {
        as: 'product_prices',
        model: ProductPrices
      }],
      order: [
        ['id', 'DESC']
      ]
    })
    return result
  }

  async consumerCreateAssets (data) {
    const result = await ConsumerProductAssets.bulkCreate(data)
    return result
  }

  async createConsumerProducts (data) {
    const { priceActiveStartDate, priceActiveEndDate, ...rest } = data
    data.languageID = 1
    data.consumer_product_languages = data
    data.consumer_product_prices = {
      ...rest,
      startDate: priceActiveEndDate,
      endDate: priceActiveStartDate
    }
    const result = await ConsumerProducts.create(data, {
      include: [{
        as: 'consumer_product_languages',
        model: ConsumerProductLanguages
      }, {

        as: 'consumer_product_prices',
        model: ConsumerProductPrices

      }]
    })
    return result
  }

  async createMasterProducts (data) {
    const [productCode, lastNumber, prefix] = await this.getProductCodes()
    data.productCode = productCode
    data.product_codes = {
      lastNumber, prefix
    }
    const result = await Products.create(data, {
      include: [{
        as: 'product_codes',
        model: ProductCodes
      }]
    })

    return result
  }

  async isConsumerProductExist (where) {
    const result = await ConsumerProducts.findOne({
      where
    })
    return result
  }

  async getProductCodes () {
    const lastCodes = await ProductCodes.findOne({
      where: {},
      raw: true,
      order: [
        ['id', 'DESC']
      ]
    })
    const { lastNumber = 0, prefix } = lastCodes
    let initialPrefix = prefix
    const initialNumber = (parseInt(lastNumber) || 0) + 1
    if (!prefix) {
      initialPrefix = constant.prefix.products
    }
    const zeroFillLength = parseInt(constant.prefix.zerofillLength || 6)
    const char = zeroFillLength - parseInt(initialNumber.toString().length)
    const zerofill = new Array(char).fill(0)
    zerofill.push(initialNumber)
    const productCodes = `${initialPrefix}${zerofill.join('')}`
    return [productCodes, initialNumber, initialPrefix]
  }

  async findProductByID (where) {
    const { consumerProductID: id } = where

    const result = await ConsumerProducts.findOne({
      where: {
        id
      },
      include: [{
        as: 'consumer_product_prices',
        model: ConsumerProductPrices
      }, {
        as: 'consumer_product_languages',
        model: ConsumerProductLanguages
      }, {
        as: 'consumer_product_category_relations',
        model: ConsumerProductCategoryRelations
      }],
      order: [
        ['id', 'DESC']
      ]
    })
    return result
  }

  async findMasterProductByID (where) {
    const { productID: id } = where
    const result = await Products.findOne({
      where: {
        id
      },
      include: [{
        as: 'product_codes',
        model: ProductCodes
      }, {
        as: 'product_prices',
        model: ProductPrices
      }],
      order: [
        ['id', 'DESC']
      ]
    })
    return result
  }

  async updateMasterProduct (where) {
    const { productID: id, ...rest } = where
    const result = await Products.update(
      { ...rest },
      {
        returning: true,
        plain: true,
        where: {
          id
        }
      }
    )
    return result
  }

  async updateConsumerProduct (where) {
    const { consumerProductID: id, ...rest } = where
    const result = await ConsumerProducts.update(
      { ...rest },
      {
        returning: true,
        plain: true,
        where: {
          id
        }
      }
    )
    return result
  }
}

module.exports = new ProductModel()
