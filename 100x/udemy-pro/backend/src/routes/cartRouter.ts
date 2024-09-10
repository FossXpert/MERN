import express from 'express';
import { addToCart } from '../controllers/cartController';
import { isAuthenticated } from '../middlewares/auth';


const cartRouter = express.Router();

cartRouter.post('/addtocart',isAuthenticated,addToCart);

export default cartRouter;