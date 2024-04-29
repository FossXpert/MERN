"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.userLogin = exports.userSignup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const zod_1 = require("zod");
const jwtHandler_1 = require("./signup/jwtHandler");
require("dotenv").config();
const validateEmailID = (usernameOrEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmail = /\S+@\S+\.\S+/.test(usernameOrEmail);
    let isEmailExist = yield User_1.default.findOne({
        $or: [{ email: isEmail ? usernameOrEmail : '' }, { username: usernameOrEmail }],
    }); //About this operator (https://sprl.in/166MJbR)
    return isEmailExist;
});
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(password, 12);
});
const vaildateMobile = (mobile) => __awaiter(void 0, void 0, void 0, function* () {
    let isMobileExist = yield User_1.default.findOne({ mobile });
    return isMobileExist;
});
const comparePassword = (password, existingPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return bcrypt_1.default.compare(password, existingPassword);
});
const userSignup = (req, role, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validate Email and username
        let inputProps = zod_1.z.object({
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(6),
            mobile: zod_1.z.string().min(10).max(10),
            username: zod_1.z.string().min(3),
        });
        const parsedInput = inputProps.safeParse(req.body);
        if (!parsedInput.success) {
            return res.status(400).json(parsedInput.error.errors);
        }
        const email = parsedInput.data.email;
        const username = parsedInput.data.username;
        const mobile = parsedInput.data.mobile;
        const password = parsedInput.data.password;
        if (!!(yield validateEmailID(email))) {
            res.status(409).json("Email already exist");
            return;
        }
        if (!!(yield validateEmailID(username))) {
            res.status(409).json("Username already exist");
            return;
        }
        //validate Mobile
        if (!!(yield vaildateMobile(mobile))) {
            res.status(409).json("This Mobile Number already exist");
            return;
        }
        //save password using bcrypt
        const encryPassword = yield encryptPassword(password);
        const user = new User_1.default({
            email,
            username,
            encryPassword,
            role,
        });
        yield user.save();
        return res.status(201).json({
            message: "Hurry! now you are successfully registred. Please login.",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});
exports.userSignup = userSignup;
const userLogin = (req, role, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputProps = zod_1.z.object({
            email: zod_1.z.string().email().optional(),
            password: zod_1.z.string().min(6),
            username: zod_1.z.string().min(3).optional(),
        });
        const parsedInput = inputProps.safeParse(req.body);
        if (!parsedInput.success) {
            console.log(parsedInput.error.errors);
            return res.status(400).json(parsedInput.error.errors);
        }
        const email = parsedInput.data.email;
        const username = parsedInput.data.username;
        if (!email && !username) {
            return res.status(400).json("Please provide email or username");
        }
        // Find user by email or username
        let userData;
        if (email) {
            userData = yield validateEmailID(email);
        }
        else if (username) {
            userData = yield validateEmailID(username);
        }
        else {
            throw new Error("Invalid email address or username");
        }
        if (!userData) {
            return res.status(404).json("User not found");
        }
        if (userData.role !== role) {
            throw new Error(`You are trying to access ${role}'s route with a ${userData.role}'s account`);
        }
        //Password time
        const password = parsedInput.data.password;
        if (yield comparePassword(password, userData.password)) {
            console.log("Userdata  :" + userData);
            let token = (0, jwtHandler_1.generateJWT)(userData);
            res.status(200).send({
                message: "Success",
                data: userData,
                Token: token,
            });
        }
        else {
            // Handle incorrect password
            throw new Error("Incorrect password");
        }
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});
exports.userLogin = userLogin;
const check = (req, res) => {
    res.send(JSON.stringify({
        header: req.headers,
        body: req.body,
        param: req.params,
        payload: req.payload
    }));
};
exports.check = check;
