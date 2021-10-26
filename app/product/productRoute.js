'use strict'
/**
 * Protected Route
 * With Authentication
* @author Fajrul
 * file name should belongs to folder's Name
 * product = productRoute
 * products = productsRoute
 */
// const multer = require('multer')
// const disk = multer({ storage: multer.memoryStorage() })
// const productController = require('./productController')
// const productMiddleware = require('./productMiddleware')
// const {
//   upload,
//   isEntityFalse,
//   constant
// } = require('../../core')
// const { routes } = constant
module.exports = (app) => {
  // /**
  //  * crud consumer products
  //  */
  // app
  //   // URL : /products
  //   .route(routes.consumerProducts)

  //   .post([productMiddleware.productID, isEntityFalse], productController.createConsumerProducts)

  //   .get(productController.getConsumerProducts)

  //   .put([productMiddleware.consumerProductID, isEntityFalse], productController.updateConsumerProduct)

  // app
  //   // URL : /products/id
  //   .route(routes.consumerProductByID)

  //   .get(productController.getConsumerProductByID)

  // /**
  //  * Upload images for consumer products
  //  */
  // app
  //   // URL : /products/images
  //   .route(routes.consumerProductImages)

  //   .post(disk.array('productImages', 12), productController.consumerProductImages)

  // /**
  //  *  crud Master Products
  //  */
  // app
  //   // URL : /master/products
  //   .route(routes.masterProducts)

  //   .post(productController.createMasterProducts)

  //   .get(productController.getMasterProducts)

  //   .put([productMiddleware.productID, isEntityFalse], productController.updateMasterProduct)

  // app
  //   // URL : /master/products/id
  //   .route(routes.masterProductsByID)

  //   .get(productController.getProductByID)

  // /**
  //  * Upload images for consumer products
  //  */
  // app
  //   // URL :  /master/products/images
  //   .route(routes.masterProductImages)

  //   .post(disk.array('productImages', 12), productController.masterUploadImages)
}
