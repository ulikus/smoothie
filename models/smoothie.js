'use strict';
module.exports = (sequelize, DataTypes) => {
  const Smoothie2 = sequelize.define('Smoothie', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type:DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    status: {
      type:DataTypes.ENUM('In Stock', 'Out of Stock'),
      allowNull: false,
    }
  }, {});
  Smoothie2.associate = function(models) {
    // associations can be defined here
  };
  return Smoothie2;
};