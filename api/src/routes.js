const express = require('express')
const compose = require('compose-middleware').compose
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const ProductController = require('./app/controllers/ProductController')
const ProductTypeController = require('./app/controllers/ProductTypeController')
const OrderController = require('./app/controllers/OrderController')
const OrderItemController = require('./app/controllers/OrderItemController')
const ProductSizeController = require('./app/controllers/ProductSizeController')
const CartItemController = require('./app/controllers/CartItemController')
const CartController = require('./app/controllers/CartController')
const FileController = require('./app/controllers/FileController')
const ClientAuthMiddleware = require('./app/middlewares/clientAuth')
const AdminMiddleware = require('./app/middlewares/adminAuth')

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')
  return next()
})

routes.get('/files/:file', FileController.show)

routes.post('/signin', SessionController.store)
routes.delete('/logout', SessionController.destroy)
routes.post('/signup', UserController.store)

/**
 * Product
 */
routes.get('/app/product', ProductController.index)
routes.get('/app/product/:id', ProductController.show)
routes.post(
  '/app/product',
  compose(
    AdminMiddleware,
    upload.single('picture')
  ),
  ProductController.store
)
routes.delete('/app/product/:id', AdminMiddleware, ProductController.delete)
routes.put(
  '/app/product/:id',
  compose(
    AdminMiddleware,
    upload.single('picture')
  ),
  ProductController.update
)

/**
 * Product type
 */
routes.get('/app/product/:product_id/type', ProductTypeController.index)
routes.get('/app/product/:product_id/type/:id', ProductTypeController.show)
routes.post(
  '/app/product/:product_id/type',
  compose(
    AdminMiddleware,
    upload.single('picture')
  ),
  ProductTypeController.store
)
routes.put(
  '/app/product/:product_id/type/:id',
  compose(
    AdminMiddleware,
    upload.single('picture')
  ),
  ProductTypeController.update
)
routes.delete(
  '/app/product/:product_id/type/:id',
  AdminMiddleware,
  ProductTypeController.delete
)

/**
 * Product size
 */
routes.get(
  '/app/product_type/:product_type_id/size/:id',
  ProductSizeController.show
)
routes.get(
  '/app/product_type/:product_type_id/size',
  ProductSizeController.index
)

/**
 * Conferir aqui!!!!!
 */
routes.post(
  '/app/product_size',
  compose(
    AdminMiddleware,
    upload.single('picture')
  ),
  ProductSizeController.store
)
routes.put(
  '/app/product_type/:product_type_id/size/:id',
  compose(
    AdminMiddleware,
    upload.single('picture')
  ),
  ProductSizeController.update
)
routes.delete(
  '/app/product_type/:product_type_id/size/:id',
  AdminMiddleware,
  ProductSizeController.delete
)

/**
 * Order
 */
routes.get(
  '/app/user/:user_id/order',
  ClientAuthMiddleware,
  OrderController.show
)
routes.get('/app/order', AdminMiddleware, OrderController.index)
routes.post(
  '/app/usuario/:user_id/order',
  ClientAuthMiddleware,
  OrderController.store
)

/**
 * Order item
 */
routes.post(
  '/app/usuario/:user_id/pedido/:order_id/item',
  ClientAuthMiddleware,
  OrderItemController.store
)
routes.delete(
  '/app/usuario/:user_id/pedido/:order_id/item/:id',
  ClientAuthMiddleware,
  OrderItemController.delete
)

/**
 * Cart
 */
routes.get(
  '/app/usuario/:user_id/carrinho',
  ClientAuthMiddleware,
  CartController.index
)
routes.delete(
  '/app/usuario/:user_id/carrinho',
  ClientAuthMiddleware,
  CartController.delete
)
routes.post('/app/usuario/:user_id/carrinho', CartItemController.store)
routes.delete(
  '/app/usuario/:user_id/carrinho/item/:id',
  CartItemController.delete
)

module.exports = routes
