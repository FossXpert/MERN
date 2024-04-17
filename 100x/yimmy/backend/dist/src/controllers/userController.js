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
exports.userLogin = exports.userSignup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
require('dotenv').config();
const validateEmailID = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let isEmailExist = yield User_1.default.findOne({ email });
    return isEmailExist;
});
const validateUserName = (username) => __awaiter(void 0, void 0, void 0, function* () {
    let isUsernameExist = yield User_1.default.findOne({ username });
    return isUsernameExist;
});
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(password, 12);
});
const comparePassword = (password, existingPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return bcrypt_1.default.compare(password, existingPassword);
});
const userSignup = (req, role, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validate Email ID
        if ((!!(yield validateEmailID(req.body.email)))) {
            res.status(409).json('This email id already exist');
            return;
        }
        //validating Username
        if ((!!(yield validateUserName(req.body.username)))) {
            res.status(422).send("The username you have entered is not valid");
            return;
        }
        //save password using bcrypt
        const password = yield encryptPassword(req.body.password);
        const user = new User_1.default(Object.assign(Object.assign({}, req.body), { password,
            role }));
        yield user.save();
        return res.status(201).json({
            message: "Hurry! now you are successfully registred. Please login."
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.userSignup = userSignup;
const userLogin = (req, role, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email, password } = req.body;
        let userData = yield validateEmailID(email);
        if (userData === null) {
            throw new Error("Invalid email address");
        }
        if (userData.role !== role) {
            throw new Error(`You are trying to access ${role}'s route with a ${userData.role}'s account`);
        }
        if (yield comparePassword(password, userData.password)) {
            console.log(userData);
            res.status(200).send({
                message: "Success",
                data: userData,
            });
        }
        else {
            // Handle incorrect password
            throw new Error("Invalid email address or password");
        }
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});
exports.userLogin = userLogin;
