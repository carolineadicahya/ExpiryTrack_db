"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    static associate(models) {
      Produk.hasOne(models.Notifikasi, {
        foreignKey: "produk_id",
        targetKey: "id",
        allowNull: "false",
        onDelete: "CASCADE",
      });

      Produk.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        allowNull: "false",
        onDelete: "CASCADE",
      });

      Produk.belongsTo(models.Detail_Produk, {
        foreignKey: "detail_id",
        targetKey: "id",
        allowNull: "false",
        onDelete: "CASCADE",
      });
    }
  }
  Produk.init(
    {
      user_id: DataTypes.INTEGER,
      detail_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Produk",
    }
  );
  return Produk;
};
