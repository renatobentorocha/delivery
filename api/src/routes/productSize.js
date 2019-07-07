const routes = require('./routes')

const compose = require('compose-middleware').compose
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)
const ProductSizeController = require('../app/controllers/ProductSizeController')
const AdminMiddleware = require('../app/middlewares/adminAuth')

class ProductSize {
  static create () {
    /**
     * Product size
     */
    routes.get(
      '/app/product_type/:product_type_id/size/:id',
      ProductSizeController.show
    )
    routes.get(
      '/app/product_type/:product_type_id/size',
      ProductSizeController.index
    )

    /**
     * Conferir aqui!!!!!
     */
    routes.post(
      '/app/product_size',
      compose(
        AdminMiddleware,
        upload.single('picture')
      ),
      ProductSizeController.store
    )
    routes.put(
      '/app/product_type/:product_type_id/size/:id',
      compose(
        AdminMiddleware,
        upload.single('picture')
      ),
      ProductSizeController.update
    )
    routes.delete(
      '/app/product_type/:product_type_id/size/:id',
      AdminMiddleware,
      ProductSizeController.delete
    )
  }
}

module.exports = ProductSize
