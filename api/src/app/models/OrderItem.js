module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    'OrderItem',
    {},
    {
      tableName: 'order_item',
      freezeTableName: true
    }
  )

  OrderItem.associate = models => {
    OrderItem.belongsTo(models.ProductType, {
      as: 'product_type',
      foreignKey: 'product_type_id'
    })
    OrderItem.belongsTo(models.ProductSize, {
      as: 'product_size',
      foreignKey: 'product_size_id'
    })
    OrderItem.belongsTo(models.Order, {
      as: 'order',
      foreignKey: 'order_id'
    })
  }

  return OrderItem
}
