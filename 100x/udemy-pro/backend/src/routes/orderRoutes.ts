
import express, { Router } from "express";
import { isAuthenticated } from "../middlewares/auth";
import { createOrder } from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post('/createorder',isAuthenticated,createOrder);


export default orderRouter;