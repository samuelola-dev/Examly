import bcrypt from "bcryptjs";

import { User } from "../models/user.model.js";

import { sendSuccess } from "../utils/response.js";
import { ApiError } from "../utils/error.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Registration Logic
export const register = asyncHandler(async(req, res) => {
    const {name, matric_number, password, role} = req.body;

    // Check if ur exists
    const user = await User.findOne({ where: { matric_number } });
    if (user) throw ApiError.badRequest("User already exists");
    
    // Create User
    await User.create({name, matric_number, password, role});
    
    // Send User
    sendSuccess(res, {name, matric_number}, "User Registered Successfully") ; 
});

export const login = asyncHandler(async(req, res) => {
    const {matric_number, password} = req.body;

    // Check if user exists
    const user = await User.findOne({ where: { matric_number } });
    if (!user) throw ApiError.badRequest("Invalid matric number or password");

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw ApiError.badRequest("Invalid matric number or password");

    // Send response
    sendSuccess(res, {name: user.name, role: user.role}, "Login Successful");
});

export const showRegister = (req, res) => {
    res.redirect("/")
};
