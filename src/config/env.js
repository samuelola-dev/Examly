import dotenv from "dotenv";

dotenv.config();

export const configurations = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 5000,

    // Database Configurations
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DIALET: 'mysql',
};
