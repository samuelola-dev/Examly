import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to Examly")
});

app.listen(PORT, ()=>{
    console.log(`Server now running at  http://localhost/${PORT}`)
});
