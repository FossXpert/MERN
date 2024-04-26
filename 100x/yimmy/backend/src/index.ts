import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import dotenv from 'dotenv';
import { useAuth0 } from "@auth0/auth0-react";
import {auth} from "express-oauth2-jwt-bearer"
dotenv.config();
const app: express.Application = express();
app.use(bodyParser.json());
// Enable CORS for all domains
app.use(cors());

//for oauth
export const jwtCheck = auth({
    audience: 'This is a unique Identifier',
    issuerBaseURL: 'https://dev-cd616eaxtu7so5dm.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

const port: number = parseInt(process.env.PORT || '3001', 10);
const host : string = process.env.HOST || 'localhost';
const connectionStringLocal: string = "mongodb://localhost:27017/";
const connectionString: string =
  "mongodb+srv://rahulray8518:rahulray85188101@cluster0.oveeh21.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString);
mongoose.connection.on("connected", () => {
  console.log("mongoose Connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongoose Disconnected");
});
mongoose.connection.on("error", (err: Error) => {
  console.log(`mongoose Error: ${err}`);
});
app.use("/user", userRoutes);
app.listen(port, host, () => {
    console.log(`Backend is running on PORT : ${port}`);
  });
  