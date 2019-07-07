const {
  Order,
  User,
  OrderItem,
  ProductType,
  ProductSize
} = require('../models')

const Images = require('../util/Images')

const fileAddress = require('../util/imagesUrl')

function getOrderUpdateWithItemPicturePath (order) {
  const orderItems = order.order_item.map(item => {
    const p = {
      ...item.product_type,
      dimension: Images.getDimensions(item.product_type.picture),
      picture: `${fileAddress}/${item.product_type.picture}`
    }

    return { ...item, product_type: p }
  })

  return { ...order, order_item: orderItems }
}

class OrderController {
  async show (req, res) {
    try {
      const orders = await Order.findAll({
        attributes: { exclude: ['user_id', 'updatedAt'] },
        include: [
          {
            model: OrderItem,
            as: 'order_item',
            attributes: ['id'],
            include: [
              {
                model: ProductType,
                as: 'product_type',
                attributes: ['id', 'description', 'picture']
              },
              {
                model: ProductSize,
                as: 'product_size',
                attributes: ['price']
              }
            ]
          }
        ],
        where: { user_id: req.params.user_id },
        order: [['createdAt', 'DESC']]
      })

      return res.json(orders)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async index (req, res) {
    try {
      const orders = await Order.findAll({
        attributes: ['id', 'createdAt', 'note'],
        include: [
          { model: User, as: 'user', attributes: ['name'] },
          {
            model: OrderItem,
            as: 'order_item',
            attributes: ['id'],
            include: [
              {
                model: ProductType,
                as: 'product_type',
                attributes: ['id', 'description', 'picture']
              },
              {
                model: ProductSize,
                as: 'product_size',
                attributes: ['price', 'size', 'unit', 'description']
              }
            ]
          }
        ],
        order: [['createdAt', 'DESC']]
      })

      return res.json(
        JSON.parse(JSON.stringify(orders)).map(order =>
          getOrderUpdateWithItemPicturePath(order)
        )
      )
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async store (req, res) {
    try {
      const order = await Order.create({
        user_id: req.params.user_id,
        ...req.body
      })

      return res.json(order.toJSON())
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async delete (req, res) {
    try {
      await Order.destroy({ where: { id: req.params.id } })

      return res.send()
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new OrderController()
