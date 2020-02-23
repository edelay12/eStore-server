const express = require('express')
const AdminService = require('./admin-service')

const AdminRouter = express.Router();
const jsonParser = express.json();

AdminRouter
    .route('/')
    //   .all(checkAdmin auth)
    .get((req, res, next) => {
        AdminService.getAllProducts(req.app.get('db'))
          .then(products => {
            res.json(products)
          })
          .catch(next)
      })
      .post(jsonParser, (req, res, next) => {
        const { product_name, product_roast, price, picture_main, details, origin, collection, sale, sale_price, featured } = req.body;
        const newProduct = { product_name, product_roast, price, picture_main, details, origin, collection, sale, sale_price, featured }
        console.log(newProduct)
        for(const [key, value] of Object.entries(newProduct)) {
          if (value == null && value !== sale_price) {
            return res.status(400).json({
              error: { message: `Missing '${key}' in request body` }           
             })
          }
        }
        AdminService.addProduct(
          req.app.get('db'),
          newProduct
        )
        .then(product => {
          res.status(201)
          .location('/admin')
          .json(product)
        })
      })

      AdminRouter
      .route('/:productid')
      .all((req, res, next) => {
        AdminService.getById(
           req.app.get('db'),
           req.params.productid
           )
           .then(product => {
               if (!product) {
                 return res.status(404).json({
                   error: { message: `Product doesn't exist` }
                 })
               }
               res.product = product
               next()
             })
             .catch(next)
     })
     .get((req, res, next) => {
       res.json(res.product)
     })
     .delete((req,res, next) => {
       AdminService.deleteProduct(
         req.app.get('db'),
         req.params.productid
       )
       .then(numRowsAffected => {
         res.status(204)
       })
       .catch(next)
     })
     .patch(jsonParser, (req, res, next) => {
      const { product_name, product_roast, price, picture_main, details, origin, collection, sale, sale_price, featured } = req.body;
      const newProduct = { product_name, product_roast, price, picture_main, details, origin, collection, sale, sale_price, featured }

      for(const [key, value] of Object.entries(newProduct)) {
        if (value == null && value !== sale_price) {
          return res.status(400).json({
            error: { message: `Missing '${key}' in request body` }           
           })
        }
      }
      AdminService.updateProduct(
        req.app.get('db'),
        req.params.productid,
        newProduct,
      )
      .then(product => {
        res.status(201)
      })
    })


      module.exports = AdminRouter;
      //products.map(products.serializeArticle)