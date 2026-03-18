import express from "express";
import { configurations } from "./config/env.js";
import { sequelize } from "./config/db.js";

// Routes
import authRoute from "./routes/auth.routes.js";
import adminRoute from "./routes/admin.routes.js";
import studentRoute from "./routes/student.routes.js";


const app = express();
const PORT = configurations.PORT;

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to Examly");
});

app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/student", studentRoute);

(async () => {

    // Try connection to Database
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


