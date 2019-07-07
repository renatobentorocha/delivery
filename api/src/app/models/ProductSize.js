module.exports = (sequelize, DataTypes) => {
  const ProductSize = sequelize.define(
    'ProductSize',
    {
      size: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      unit: DataTypes.STRING,
      description: DataTypes.STRING,
      picture: DataTypes.STRING
    },
    {
      tableName: 'product_size',
      freezeTableName: true
    }
  )

  ProductSize.associate = models => {
    ProductSize.belongsTo(models.ProductType, {
      as: 'product_type',
      foreignKey: 'product_type_id'
    })
    ProductSize.hasMany(models.OrderItem, {
      as: 'order_item',
      foreignKey: 'product_size_id'
    })
  }

  return ProductSize
}
