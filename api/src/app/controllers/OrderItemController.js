const { Order, OrderItem } = require('../models')

class OrderItemController {
  async store (req, res) {
    try {
      const { order_id: orderId, user_id: userId } = req.params

      const order = await Order.findAll({
        where: { id: orderId, user_id: userId }
      })

      if (!order) {
        return res.status(400).json({ message: 'Pedido não encontrado' })
      }

      const orderItem = await OrderItem.create({
        order_id: orderId,
        ...req.body
      })

      return res.json(orderItem.toJSON())
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async delete (req, res) {
    try {
      const { order_id: orderId, user_id: userId } = req.params

      const order = await Order.findAll({
        where: { id: orderId, user_id: userId }
      })

      if (!order) {
        return res.status(400).json({ message: 'Recurso não encontrado' })
      }

      await OrderItem.destroy({
        where: {
          id: req.params.id
        }
      })

      return res.send()
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new OrderItemController()
