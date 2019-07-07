module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      date: DataTypes.DATE,
      note: DataTypes.STRING,
      zip_code: DataTypes.STRING(8),
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      district: DataTypes.STRING
    },
    {
      tableName: 'order',
      freezeTableName: true
    }
  )

  Order.associate = models => {
    Order.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
    Order.hasMany(models.OrderItem, {
      as: 'order_item',
      foreignKey: 'order_id'
    })
  }

  return Order
}
