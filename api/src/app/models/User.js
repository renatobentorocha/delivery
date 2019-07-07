const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      permission: DataTypes.ENUM(['ADMIN', 'CLIENT'])
    },
    {
      tableName: 'user',
      freezeTableName: true,
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hashSync(user.password, 8)
          }
        }
      }
    }
  )

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  User.prototype.generateToken = function (id) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }

  return User
}
