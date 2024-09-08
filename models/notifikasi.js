"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notifikasi extends Model {
    static associate(models) {
      Notifikasi.belongsTo(models.Produk, {
        foreignKey: "produk_id",
        targetKey: "id",
        allowNull: "false",
        onDelete: "CASCADE",
      });
    }
  }
  Notifikasi.init(
    {
      produk_id: DataTypes.INTEGER,
      pesan_notif: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Notifikasi",
    }
  );
  return Notifikasi;
};
