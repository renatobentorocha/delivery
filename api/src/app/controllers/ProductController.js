const { Product } = require('../models')

const fileAddress = require('../util/imagesUrl')

class ProductController {
  async show (req, res) {
    try {
      const product = await Product.findByPk(req.params.id, { raw: true })

      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' })
      }

      return res.json({
        ...product,
        picture_path: `${fileAddress}/${product.picture}`
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async index (req, res) {
    try {
      const products = await Product.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        raw: true
      })

      return res.json(
        products.map(p => {
          return {
            ...p,
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

      const product = await Product.create({ ...req.body, picture })

      return res.json(product)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async update (req, res) {
    try {
      const product = await Product.findByPk(req.params.id)

      const productUpdated = await product.update({ ...req.body })

      res.json({
        ...productUpdated.toJSON(),
        picture_path: `${fileAddress}/${productUpdated.toJSON().picture}`
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async delete (req, res) {
    try {
      const product = await Product.findByPk(req.params.id)

      if (product) {
        await Product.destroy({ where: { id: req.params.id } })
      }

      return res.send()
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new ProductController()
