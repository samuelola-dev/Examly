import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export class Attempt extends Model {}

Attempt.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    exam_id: { type: DataTypes.INTEGER, allowNull: false },
    score: { type: DataTypes.INTEGER, defaultValue: 0 },
    submitted_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    modelName: "Attempt",
    tableName: "attempts",
    timestamps: true,
  }
);