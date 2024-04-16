"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = 'Sec3t';
const options = {
    expiresIn: '10h'
};
const generateJWT = (userName) => {
    const payload = { userName };
    return jsonwebtoken_1.default.sign(payload, secretKey, options);
};
exports.generateJWT = generateJWT;
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secretKey, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: 'Invalid token' });
            }
            else if (!decodedToken) {
                res.status(401).json({ message: 'Token not provided' });
            }
            else {
                const userPayload = decodedToken;
                req.user = userPayload;
                next();
            }
        });
    }
    else {
        res.status(401).json({ message: 'Authentication header missing or invalid' });
    }
};
exports.authenticateJWT = authenticateJWT;
