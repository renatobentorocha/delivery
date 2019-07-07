const sizeOf = require('image-size')
const path = require('path')

class Image {
  static getDimensions (ImageName) {
    const dimensions = sizeOf(
      path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', ImageName)
    )

    return { width: dimensions.width, height: dimensions.height }
  }
}

module.exports = Image
