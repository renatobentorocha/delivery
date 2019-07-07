module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define(
    'ProductType',
    {
      description: DataTypes.STRING,
      picture: DataTypes.STRING
    },
    {
      tableName: 'product_type',
      freezeTableName: true
    }
  )

  ProductType.associate = models => {
    ProductType.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_id'
    })
    ProductType.hasMany(models.OrderItem, {
      as: 'order_item',
      foreignKey: 'product_type_id'
    })
    ProductType.hasMany(models.ProductSize, {
      as: 'product_size',
      foreignKey: 'product_type_id'
    })
  }

  return ProductType
}
