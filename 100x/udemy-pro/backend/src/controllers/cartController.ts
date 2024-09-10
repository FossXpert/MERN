import { Request, Response, NextFunction } from 'express';
import { catchAsyncError, success } from "../middlewares/catchAsyncError";
import ErrorHandler from "../utills/errorHandlers";
import mongoose from 'mongoose';
import courseModel from '../models/course';
import Cart from '../models/cart';
import { jwtPayloadNew } from '../middlewares/auth';

// Add to cart function
export const addToCart = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log((req as jwtPayloadNew).user);
        const userId = (req as jwtPayloadNew).user._id;  // Get user ID from the JWT 
        console.log(userId);
        const productId = req.body._id;  // Get product ID from request body
        console.log(productId);
        const quantity = req.body.quantity || 1;  // Get quantity (default to 1 if not provided)

        // Find the product (assumes you're adding products from the courseModel)
        const product = await courseModel.findById(productId);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        // Check if the user already has a cart
        let cart:any = await Cart.findOne({ user: userId });

        // If the user has no cart, create a new one
        if (!cart) {
            cart = new Cart({
                user: userId,
                items: [{
                    product: productId,
                    quantity: quantity,
                    price: product.price,
                    totalPrice: product.price * quantity
                }],
                subTotal: product.price * quantity
            });
        } else {
            // If cart exists, check if product is already in the cart
            const itemIndex = cart.items.findIndex((item:any) => item.product.toString() === productId);

            if (itemIndex > -1) {
                // Product exists in the cart, update the quantity and total price
                cart.items[itemIndex].quantity += quantity;
                cart.items[itemIndex].totalPrice = cart.items[itemIndex].quantity * cart.items[itemIndex].price;
            } else {
                // Product does not exist in the cart, add it as a new item
                cart.items.push({
                    product: productId,
                    quantity: quantity,
                    price: product.price,
                    totalPrice: product.price * quantity
                });
            }

            // Recalculate the cart subtotal
            cart.subTotal = cart.items.reduce((sum : any, item : any) => sum + item.totalPrice, 0);
        }

        // Save the cart
        await cart.save();

        // Send response
        res.status(200).json({
            success: true,
            cart
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});
