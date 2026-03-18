import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export class Question extends Model {}

Question.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    exam_id: { type: DataTypes.INTEGER, allowNull: false },
    question_text: { type: DataTypes.TEXT, allowNull: false },
    option_a: { type: DataTypes.STRING, allowNull: false },
    option_b: { type: DataTypes.STRING, allowNull: false },
    option_c: { type: DataTypes.STRING, allowNull: false },
    option_d: { type: DataTypes.STRING, allowNull: false },
    correct_option: { type: DataTypes.ENUM("a", "b", "c", "d"), allowNull: false },
  },
  {
    sequelize,
    modelName: "Question",
    tableName: "questions",
    timestamps: true,
  }
);