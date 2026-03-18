import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export class Exam extends Model {}

Exam.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    is_published: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "Exam",
    tableName: "exams",
    timestamps: true,
  }
);