const { ProductType } = require('../models')

const fileAddress = require('../util/imagesUrl')

class ProductTypeController {
  async show (req, res) {
    try {
      const productType = await ProductType.findOne({
        where: {
          id: req.params.id,
          product_id: req.params.id
        },
        raw: true
      })

      if (!productType) {
        return res.status(404).json({ message: 'Produto não encontrado' })
      }

      return res.json({
        ...productType,
        picture_path: `${fileAddress}/${productType.picture}`
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async index (req, res) {
    try {
      const productTypes = await ProductType.findAll({
        where: {
          product_id: req.params.product_id
        },
        raw: true
      })

      return res.json(
        productTypes.map(p => {
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

      const productType = await ProductType.create({
        ...req.body,
        product_id: req.params.product_id,
        picture
      })

      return res.json(productType)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async update (req, res) {
    try {
      const productType = await ProductType.findOne({
        where: {
          id: req.params.id,
          product_id: req.params.product_id
        }
      })

      const productTypeUpdated = await productType.update({ ...req.body })

      res.json({
        ...productTypeUpdated.toJSON(),
        picture_path: `${fileAddress}/${productTypeUpdated.toJSON().picture}`
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async delete (req, res) {
    try {
      const productType = await ProductType.findOne({
        where: {
          id: req.params.id,
          product_id: req.params.product_id
        }
      })

      if (productType) {
        await ProductType.destroy({
          where: { id: req.params.id, product_id: req.params.product_id }
        })
      }

      return res.send()
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new ProductTypeController()
