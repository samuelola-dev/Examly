import { Sequelize, Model, DataTypes } from "sequelize";
import {sequelize} from "../config/db.js";
import bcrypt from "bcryptjs"

// User Model
export class User extends Model {
    async comparePassword(plain) {
        return await bcrypt.compare(plain, this.password);
    }

    toJSON() {
        const values = { ...this.get() };
        delete values.password;
        return values;
    }
}


User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    matric_number: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { notEmpty: true},
},
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM("student", "admin"),
      defaultValue: "student",
    },
  },

  {
    timestamps: true,
    sequelize,
    modelName: "User",
    tableName: "users",
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  },
);