module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
    },
    userId: DataTypes.STRING,
    sellerId: DataTypes.STRING,
    totalPrice: DataTypes.DECIMAL,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId', as: 'seller'
    });
  }

  return User;
}