const { Cart, ProductType, ProductSize } = require('../models')
const Images = require('../util/Images')
const fileAddress = require('../util/imagesUrl')

class CartController {
  async index (req, res) {
    try {
      const cart = await Cart.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            model: ProductType,
            as: 'product_type'
          },
          {
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            model: ProductSize,
            as: 'product_size'
          }
        ],
        where: {
          user_id: req.params.user_id
        }
      })

      return res.json(
        JSON.parse(JSON.stringify(cart)).map(item => {
          const { product_type: productType } = item
          const { product_size: productSize } = item

          return {
            ...item,
            product_type: {
              ...productType,
              dimension: Images.getDimensions(productType.picture),
              picture: `${fileAddress}/${productType.picture}`
            },
            product_size: {
              ...productSize,
              dimension: Images.getDimensions(productSize.picture),
              picture: `${fileAddress}/${productSize.picture}`
            }
          }
        })
      )
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async delete (req, res) {
    try {
      await Cart.destroy({ where: { user_id: req.params.user_id } })

      req.io.emit('order', { user: req.params.user_id })

      return res.send()
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new CartController()
