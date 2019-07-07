const routes = require('./routes')

const CartItemController = require('../app/controllers/CartItemController')
const ClientAuthMiddleware = require('../app/middlewares/clientAuth')

class Order {
  static create () {
    routes.post(
      '/app/usuario/:user_id/carrinho',
      ClientAuthMiddleware,
      CartItemController.store
    )
    routes.delete(
      '/app/usuario/:user_id/carrinho/item/:id',
      ClientAuthMiddleware,
      CartItemController.delete
    )
  }
}

module.exports = Order
