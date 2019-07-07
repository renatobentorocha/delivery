const routes = require('./routes')

const compose = require('compose-middleware').compose
const multerConfig = require('../config/multer')
const upload = require('multer')(multerConfig)
const ProductController = require('../app/controllers/ProductController')
const AdminMiddleware = require('../app/middlewares/adminAuth')

class Product {
  static create () {
    /**
     * Product
     */
    routes.get('/app/product', ProductController.index)
    routes.get('/app/product/:id', ProductController.show)
    routes.post(
      '/app/product',
      compose(
        AdminMiddleware,
        upload.single('picture')
      ),
      ProductController.store
    )
    routes.delete('/app/product/:id', AdminMiddleware, ProductController.delete)
    routes.put(
      '/app/product/:id',
      compose(
        AdminMiddleware,
        upload.single('picture')
      ),
      ProductController.update
    )
  }
}

module.exports = Product
