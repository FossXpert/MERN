
import express, { Router } from "express";
import { isAuthenticated, validateUserRole } from "../middlewares/auth";
import { createOrder, getAllOrders } from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post('/createorder',isAuthenticated,createOrder);
orderRouter.post('/getallorder',isAuthenticated,validateUserRole('admin'),getAllOrders);

export default orderRouter;