'use strict'
const ProductModel = require('./productModel')
const { upload } = require('../../core')
class ProductHandler {
  async getConsumerProducts (data) {
    const { count, rows } = await ProductModel.findConsumerProducts(data)
    return {
      pagination: {
        page: parseInt(data.page),
        size: parseInt(data.size),
        totalRow: count
      },
      result: rows
    }
  }

  async getConsumerProductByID (data) {
    const result = await ProductModel.findProductByID(data)
    return result
  }

  async getProductByID (data) {
    const result = await ProductModel.findMasterProductByID(data)
    return result
  }

  async getMasterProducts (data) {
    const { count, rows } = await ProductModel.findMasterProducts(data)
    return {
      pagination: {
        page: parseInt(data.page),
        size: parseInt(data.size),
        totalRow: count
      },
      result: rows
    }
  }

  async createConsumerProducts (data) {
    const result = await ProductModel.createConsumerProducts(data)
    return result
  }

  async createMasterProducts (data) {
    const result = await ProductModel.createMasterProducts(data)
    return result
  }

  async updateMasterProduct (data) {
    await ProductModel.updateMasterProduct(data)
    const result = await this.createMasterProducts(data)
    return result
  }

  async updateConsumerProduct (data) {
    await ProductModel.updateConsumerProduct(data)
    const result = await this.getConsumerProductByID(data)
    return result
  }

  async masterUploadImages ({ consumerProductID, files }) {
    const result = await ProductModel.isConsumerProductExist({ id: consumerProductID })
    if (result) {
      const storeImages = await upload.uploadStream(files, consumerProductID)
      const productAssets = storeImages.map(key => {
        return {
          consumerProductID,
          assetType: 'IMAGE',
          assetDestination: key.Location
        }
      })
      const result = await ProductModel.consumerCreateAssets(productAssets)
      return result
    }
    return result
  }

  async uploadConsumerProductImages ({ consumerProductID, files }) {
    const result = await ProductModel.isConsumerProductExist({ id: consumerProductID })
    if (result) {
      const storeImages = await upload.uploadStream(files, consumerProductID)
      const productAssets = storeImages.map(key => {
        return {
          consumerProductID,
          assetType: 'IMAGE',
          assetDestination: key.Location
        }
      })
      const result = await ProductModel.consumerCreateAssets(productAssets)
      return result
    }
    return result
  }
}

module.exports = new ProductHandler()
