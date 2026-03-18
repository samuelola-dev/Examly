import { User } from "../models/user.model.js";
import { sendSuccess } from "../utils/response.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/error.js";

// Registration Logic
export const register = asyncHandler(async(req, res) => {
    const {name, matric_number, password, role} = req.body;

    const existing = await User.findOne({ where: { matric_number } });
    if (existing) throw ApiError.badRequest("User already exists");
    
    const user = await User.create({name, matric_number, password, role});
    sendSuccess(res, {name, matric_number}, "User Registered Successfully") ; 
});

export const login = (req, res) => {
    res.send("Login")
};

export const showRegister = (req, res) => {
    res.send("What's sup");
};
