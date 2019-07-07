const routes = require('./routes')

const OrderItemController = require('../app/controllers/OrderItemController')
const ClientAuthMiddleware = require('../app/middlewares/clientAuth')

class OrderItem {
  static create () {
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
  }
}

module.exports = OrderItem
