const routes = require('./routes')

const CartController = require('../app/controllers/CartController')
const ClientAuthMiddleware = require('../app/middlewares/clientAuth')

class Cart {
  static create () {
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
  }
}

module.exports = Cart
