import express from "express";

const router = express.Router();

router.post("/reg", (req, res)=>{
    res.send("Register")
});

router.post("/login", (req, res)=> {
    res.send("Login");
});

export default router;