const routes = require('./routes')

const OrderController = require('../app/controllers/OrderController')
const ClientAuthMiddleware = require('../app/middlewares/clientAuth')
const AdminMiddleware = require('../app/middlewares/adminAuth')

class Order {
  static create () {
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
  }
}

module.exports = Order
