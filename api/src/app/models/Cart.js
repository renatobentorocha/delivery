module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {},
    {
      tableName: 'cart',
      freezeTableName: true
    }
  )

  Cart.associate = models => {
    Cart.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
    Cart.belongsTo(models.ProductType, {
      as: 'product_type',
      foreignKey: 'product_type_id'
    })
    Cart.belongsTo(models.ProductSize, {
      as: 'product_size',
      foreignKey: 'product_size_id'
    })
  }

  return Cart
}
