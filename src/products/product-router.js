const express = require('express')
const productService = require('./product-service')

const ProductRouter = express.Router();

ProductRouter
    .route('/')
    .get((req, res, next) => {
        productService.getAllProducts(req.app.get('db'))
          .then(products => {
            res.json(products)
          })
          .catch(next)
      })

      ProductRouter
      .route('/sale')
      .get((req, res, next) => {
        productService.getSaleProducts(req.app.get('db'))
          .then(products => {
            res.json(products)
          })
          .catch(next)
      })

ProductRouter
      .route('/:itemId')
 .all(checkProductExists)
      .get((req, res, next) => {
        console.log(res.product)
        res.json(res.product)
      })
      
       






async function checkProductExists(req, res, next) {
  try {
    const product = await productService.getById(
      req.app.get('db'),
      req.params.itemId
    )

    if (!product)
      return res.status(404).json({
        error: `Product doesn't exist`
      })

    res.product = product
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = ProductRouter;
//products.map(products.serializeArticle)