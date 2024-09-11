import express from 'express';
import { addToCart, removeFromCart } from '../controllers/cartController';
import { isAuthenticated } from '../middlewares/auth';


const cartRouter = express.Router();

cartRouter.post('/addtocart',isAuthenticated,addToCart);
cartRouter.post('/removeFromCart',isAuthenticated,removeFromCart);

export default cartRouter;