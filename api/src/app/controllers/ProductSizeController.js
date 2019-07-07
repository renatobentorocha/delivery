const { ProductSize } = require('../models')
const Images = require('../util/Images')

const fileAddress = require('../util/imagesUrl')

class ProductSizeController {
  async show (req, res) {
    try {
      const productSize = await ProductSize.findOne({
        where: {
          id: req.params.id,
          product_type_id: req.params.product_type_id
        }
      })

      if (!productSize) {
        return res.status(404).json({ message: 'Produto não encontrado' })
      }

      return res.json({
        ...productSize,
        picture_path: `${fileAddress}/${productSize.picture}`
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async index (req, res) {
    try {
      const productSizes = await ProductSize.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        where: {
          product_type_id: req.params.product_type_id
        },
        raw: true
      })

      return res.json(
        productSizes.map(p => {
          return {
            ...p,
            dimension: Images.getDimensions(p.picture),
            picture_path: `${fileAddress}/${p.picture}`
          }
        })
      )
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async store (req, res) {
    try {
      const { filename: picture } = req.file
      const productSize = await ProductSize.create({ ...req.body, picture })

      return res.json(productSize)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async update (req, res) {
    try {
      const { filename: picture } = req.file

      const productSize = await ProductSize.findOne({
        where: {
          id: req.params.id,
          product_type_id: req.params.product_type_id
        }
      })

      const productSizeUpdated = await productSize.update({
        ...req.body,
        picture
      })

      res.json(productSizeUpdated)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async delete (req, res) {
    try {
      const productSize = await ProductSize.findOne({
        where: {
          id: req.params.id,
          product_type_id: req.params.product_type_id
        }
      })

      if (productSize) {
        await ProductSize.destroy({
          where: {
            id: req.params.id,
            product_type_id: req.params.product_type_id
          }
        })
      }

      return res.send()
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new ProductSizeController()
