import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export class Answer extends Model {}

Answer.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    attempt_id: { type: DataTypes.INTEGER, allowNull: false },
    question_id: { type: DataTypes.INTEGER, allowNull: false },
    selected_option: { type: DataTypes.ENUM("a", "b", "c", "d"), allowNull: false },
  },
  {
    sequelize,
    modelName: "Answer",
    tableName: "answers",
    timestamps: true,
  }
);