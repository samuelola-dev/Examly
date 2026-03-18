import "dotenv/config";
import { Sequelize } from "sequelize";
import { configurations } from "./env.js";


export const sequelize = new Sequelize(
    configurations.DB_NAME,
    configurations.DB_USER,
    configurations.DB_PASSWORD,

    {
        host: configurations.DB_HOST,
        dialect: 'mysql',
        logging: configurations.NODE_ENV === "development" ? console.log : false,
        pool: { max: 10, min: 0, acquire: 30000, idle: 10000 }
    }
);







