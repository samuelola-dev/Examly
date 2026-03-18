import express from "express";
import { configurations } from "./config/env.js";
import { sequelize } from "./config/db.js";

// Routes
import authRouter from "./routes/auth.routes.js"

const app = express();
const PORT = configurations.PORT;

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to Examly");
});

app.use("/auth", authRouter);

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Connection to Database has been established successfully.");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    
    } catch (error) {
        console.error("Unable to start the application:", error);
        process.exit(1);
    }
})();


