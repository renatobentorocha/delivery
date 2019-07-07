const { Cart } = require('../models')

class CartItemController {
  async store (req, res) {
    try {
      const cart = await Cart.create({ ...req.body })

      return res.json(cart)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async delete (req, res) {
    try {
      await Cart.destroy({ where: { id: req.params.id } })

      return res.send()
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new CartItemController()
