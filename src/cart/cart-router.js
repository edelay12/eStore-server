const express = require('express');
const CartService = require('./cart-service')

const cartRouter = express.Router();
const jsonBodyParser = express.json()


cartRouter
.get('/', (req,res,next) => {
    const { userId } = req.body
    const id = userId
    for (const [key, value] of Object.entries(userLogin)) {
        if (value == null)
        return res.status(400).json({
            error: `${key} is not found in request body`
        })
    }

    CartService.retrieveCart(
        req.app.get('db'),
        id
    ).then(cart => {
        res.json(cart)
    }).catch(next)
})
.post(jsonBodyParser, (req, res, next) => {
    const cart = req.body
    const userId = req.body
console.log(cart)
console.log(userId)

    CartService.checkCart(
        req.app.get('db'),
        userId
    ).then(dbCart => {
        if (dbCart) return res.status(400).json({ error: `Cart already created, delete or update current cart` })

        return CartService.addCart(
            req.app.get('db'),
            cart,
            userId
        ).then(cart => {
            res.status(201)
        })
    }).catch(next)
})
.patch(jsonBodyParser, (req, res, next) => {
    const { id , cart} = req.body 
    const userCart = cart
    const userId = id

    CartService.checkCart(
        req.app.get('db'),
        userId
    ).then(cart => {
        if (!cart) return res.status(400).json({ error: `Cart note found` })
        
        return CartService.updateCart(
            req.app.get('db'),
            userId,
            userCart
        ).then(cart => {
            res.status(201)
        })
})
})

module.exports = cartRouter