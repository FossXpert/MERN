"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Enable CORS for all domains
app.use((0, cors_1.default)());
const port = parseInt(process.env.PORT || '3001', 10);
const host = process.env.HOST || 'localhost';
const connectionStringLocal = "mongodb://localhost:27017/";
const connectionString = "mongodb+srv://rahulray8518:rahulray85188101@cluster0.oveeh21.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.connect(connectionString);
mongoose_1.default.connection.on("connected", () => {
    console.log("mongoose Connected");
});
mongoose_1.default.connection.on("disconnected", () => {
    console.log("mongoose Disconnected");
});
mongoose_1.default.connection.on("error", (err) => {
    console.log(`mongoose Error: ${err}`);
});
app.use("/user", userRoutes_1.default);
app.listen(port, host, () => {
    console.log(`Backend is running on PORT : ${port} and ${host}`);
});
