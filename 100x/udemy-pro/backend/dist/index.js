"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = require("./app");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = __importDefault(require("./utills/db"));
const error_1 = __importDefault(require("./middleware/error"));
app_1.app.use(express_1.default.json({ limit: '50mb' }));
app_1.app.use((0, cookie_parser_1.default)());
app_1.app.use((0, cors_1.default)());
app_1.app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    (0, db_1.default)();
});
app_1.app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Valid Route",
    });
});
app_1.app.all('*', (req, res, next) => {
    res.status(404).json({
        message: "Invalid Route",
    });
});
app_1.app.use(error_1.default);
