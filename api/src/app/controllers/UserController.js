const { User } = require('../models')

class UserController {
  async store (req, res) {
    try {
      const user = await User.create({ ...req.body })

      return res.json({ id: user.id, name: user.name, email: user.email })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new UserController()
