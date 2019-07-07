const routes = require('./routes')

const UserController = require('../app/controllers/UserController')
const SessionController = require('../app/controllers/SessionController')
const FileController = require('../app/controllers/FileController')

const Product = require('./product')
const ProductType = require('./productType')
const ProductSize = require('./productSize')
const OrderItem = require('./orderItem')
const Order = require('./order')
const CartItem = require('./cartItem')
const Cart = require('./cart')

routes.get('/files/:file', FileController.show)
routes.post('/signin', SessionController.store)
routes.post('/signup', UserController.store)

Product.create()
ProductType.create()
ProductSize.create()
OrderItem.create()
Order.create()
Cart.create()
CartItem.create()

module.exports = routes
