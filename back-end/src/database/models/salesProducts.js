module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    salesId: {
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
    type: Datatypes.INTEGER,
   },
},
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'salesId',
      as: 'sales',
    });
    models.Sale.belongsToMany(models.Product, {
      through: SalesProducts,
      foreignKey: 'salesId',
      otherKey: 'productId',
      as: 'products',
    });
  };
  
  return SalesProducts;
  
};
