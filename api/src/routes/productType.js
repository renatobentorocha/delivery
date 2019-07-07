const routes = require('./routes')

const compose = require('compose-middleware').compose
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)
const ProductTypeController = require('../app/controllers/ProductTypeController')
const AdminMiddleware = require('../app/middlewares/adminAuth')

class ProductType {
  static create () {
    /**
     * Product type
     */
    routes.get('/app/product/:product_id/type', ProductTypeController.index)
    routes.get('/app/product/:product_id/type/:id', ProductTypeController.show)
    routes.post(
      '/app/product/:product_id/type',
      compose(
        AdminMiddleware,
        upload.single('picture')
      ),
      ProductTypeController.store
    )
    routes.put(
      '/app/product/:product_id/type/:id',
      compose(
        AdminMiddleware,
        upload.single('picture')
      ),
      ProductTypeController.update
    )
    routes.delete(
      '/app/product/:product_id/type/:id',
      AdminMiddleware,
      ProductTypeController.delete
    )
  }
}

module.exports = ProductType
