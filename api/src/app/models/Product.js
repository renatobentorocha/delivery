module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      picture: DataTypes.STRING,
      time: DataTypes.INTEGER
    },
    {
      tableName: 'product',
      freezeTableName: true
    }
  )

  return Product
}
