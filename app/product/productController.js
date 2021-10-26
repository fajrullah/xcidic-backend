'use strict'
const {
  callback
} = require('../../core')
const ProductHandler = require('./productHandler')
class ProductController {
  async getConsumerProducts (req, res, next) {
    try {
      const data = req.query
      const result = await ProductHandler.getConsumerProducts(data)
      return callback(res, result, { status: 200, pagination: true })
    } catch (err) {
      next(err)
    }
  }

  async getConsumerProductByID (req, res, next) {
    try {
      const data = req.query
      const result = await ProductHandler.getConsumerProductByID(data)
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }

  async getProductByID (req, res, next) {
    try {
      const data = req.query
      const result = await ProductHandler.getProductByID(data)
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }

  async getMasterProducts (req, res, next) {
    try {
      const data = req.query
      const result = await ProductHandler.getMasterProducts(data)
      return callback(res, result, { status: 200, pagination: true })
    } catch (err) {
      next(err)
    }
  }

  async createConsumerProducts (req, res, next) {
    try {
      const data = req.body
      const result = await ProductHandler.createConsumerProducts(data)
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }

  async consumerProductImages (req, res, next) {
    try {
      const files = req.files
      const consumerProductID = req.body.consumerProductID
      const result = await ProductHandler.uploadConsumerProductImages({ consumerProductID, files })
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }

  async updateMasterProduct (req, res, next) {
    try {
      const data = req.body
      const result = await ProductHandler.updateMasterProduct(data)
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }

  async updateConsumerProduct (req, res, next) {
    try {
      const data = req.body
      const result = await ProductHandler.updateConsumerProduct(data)
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }

  async masterUploadImages (req, res, next) {
    try {
      const files = req.files
      const productID = req.body.productID
      const result = await ProductHandler.masterUploadImages({ productID, files })
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }

  async createMasterProducts (req, res, next) {
    try {
      const data = req.body
      const result = await ProductHandler.createMasterProducts(data)
      return callback(res, result)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new ProductController()
