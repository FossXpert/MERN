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
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const userSignup = (req, role, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validate Email ID
        const validateEmailID = (email) => __awaiter(void 0, void 0, void 0, function* () {
            let isEmailExist = yield User_1.default.findOne({ email });
            return !!isEmailExist;
        });
        if (yield validateEmailID(req.body.email)) {
            res.status(409).json('This email id already exist');
            return;
        }
        //validating Username
        const validateUserName = (username) => __awaiter(void 0, void 0, void 0, function* () {
            let isUsernameExist = yield User_1.default.findOne({ username });
            return !!isUsernameExist;
        });
        if (yield validateUserName(req.body.username)) {
            res.status(422).send("The username you have entered is not valid");
            return;
        }
        //save password using bcrypt
        const password = yield bcrypt_1.default.hash(req.body.password, 12);
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
exports.default = userSignup;
