const { User } = require('../models')

class SessionController {
  async create (req, res) {
    return res.render('auth/signin')
  }

  async store (req, res) {
    try {
      const { email, password } = req.body
      const { device } = req.headers

      const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'permission', 'password_hash'],
        where: { email }
      })

      if (!user || !(await user.checkPassword(password))) {
        return res.status(403).json({ error: 'Usuário ou senha incorreta' })
      }

      if (user.permission === 'ADMIN' && device !== 'WEB') {
        return res
          .status(403)
          .json({ error: 'Administradores devem usar o aplicativo WEB' })
      }

      if (user.permission === 'CLIENT' && device !== 'MOBILE') {
        return res
          .status(403)
          .json({ error: 'Administradores devem usar o aplicativo WEB' })
      }

      const userRes = {
        id: user.id,
        name: user.name,
        email: user.email,
        permission: user.permission
      }

      return res.json({
        ...userRes,
        token: user.generateToken(userRes)
      })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

module.exports = new SessionController()
