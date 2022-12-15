module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
  },
   quantity: {
    type: DataTypes.INTEGER,
   },
},
  {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
    });
    models.Sale.belongsToMany(models.Product, {
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
    });
  };
  
  return SalesProducts;
  
};
