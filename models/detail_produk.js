"use strict";
const { Model, BelongsTo } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Detail_Produk extends Model {
    static associate(models) {
      Detail_Produk.hasOne(models.Produk, {
        foreignKey: "detail_id",
        targetKey: "id",
        allowNull: "false",
        onDelete: "CASCADE",
      });
    }
  }
  Detail_Produk.init(
    {
      nama_produk: { type: DataTypes.STRING, allowNull: false },
      jenis_produk: { type: DataTypes.STRING, allowNull: false },
      tanggal_expired: { type: DataTypes.DATE, allowNull: false },
      pt_produksi: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Detail_Produk",
    }
  );
  return Detail_Produk;
};
