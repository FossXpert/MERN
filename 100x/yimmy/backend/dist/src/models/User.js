"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const uuid_1 = require("uuid");
//Define mongoose Schema
const userSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, uuid_1.v4)(), required: true, unique: true },
    username: { type: String, unique: true, required: [true, 'Username is required'] },
    email: { type: String, unique: true, required: [true, 'Valid Email-ID is required'] },
    password: { type: String, required: [true, 'Password is required'],
        minLength: [6, "Password must be at least 6 characters"] },
    role: {
        type: String, default: 'user', required: true,
        enum: ['user', 'admin']
    },
});
// Define and export user model
const UserModel = mongoose_1.default.model('User', userSchema);
exports.default = UserModel;
