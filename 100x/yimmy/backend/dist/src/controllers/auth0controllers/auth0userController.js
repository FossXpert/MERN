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
exports.userData = exports.login = void 0;
const axios_1 = __importDefault(require("axios"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.login = login;
const userData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const response = yield axios_1.default.get('https://dev-cd616eaxtu7so5dm.us.auth0.com/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status >= 200 && response.status < 300) {
            res.status(response.status).json({
                message: "Request Success",
                userData: response.data
            });
        }
        else {
            console.log('Request failed : ', response.statusText);
            res.status(response.status).json({
                message: 'Request failed',
                data: response.statusText
            });
        }
    }
    catch (error) {
    }
});
exports.userData = userData;
/*
add these in index.ts
//for oauth
const jwtCheck = auth({
    audience: 'This is a unique Identifier',
    issuerBaseURL: 'https://dev-cd616eaxtu7so5dm.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});
app.use(jwtCheck)
*/
