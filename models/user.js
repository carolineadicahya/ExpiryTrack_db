"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Produk, {
        foreignKey: "user_id",
        targetKey: "id",
        allowNull: "false",
        onDelete: "CASCADE",
      });

      // User.belongsTo(models. , {});
    }
  }
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      nama: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
