const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const authConfig = require('../../config/auth')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    const { id: user } = decoded

    const isAdmin = user.permission === 'ADMIN'

    if (!isAdmin) {
      throw new { error: 'Token invalid' }()
    }

    return next()
  } catch (error) {
    return res.status(401).json(error)
  }
}
