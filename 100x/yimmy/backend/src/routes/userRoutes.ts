import express from 'express';
import { Request, Response } from 'express';
import {userSignup,userLogin, check} from '../controllers/userController'; // Import the userSignup function
import { Router } from 'express';
const router:Router = express.Router();
import { User } from '@auth0/auth0-react';
import jwt from 'express-jwt'
import jwks, { koaJwtSecret } from 'jwks-rsa'

declare module 'express' {
    interface Request {
        user?: User; // Define the user property with the User type
    }
}

const verifyJwt = {
    secret : jwks.expressJwtSecret({
        cache : true,

    }),
    audience : 'this is a unique identifier',
    issuer : 'https://dev-cd616eaxtu7so5dm.us.auth0.com/',
    algorithm : ['RS256']
}

// Define a route for user signup
router.post('/signup', async (req: Request, res: Response) => {
    try {
        // Call the userSignup function
        await userSignup(req,'user', res);
    } catch (error:any) {
        console.error('Error in user signup:', error);
        res.status(500).json({ message: 'Internal server error' ,
            error : error
        });
    }
});
router.post('/login', async (req: Request, res: Response) => {
    try {
        const role = req.query.role as string;
        // Call the userSignup function
        await userLogin(req,role,res);
    } catch (error:any) {
        console.error('Error in user Login:', error);
        res.status(500).json({ message: 'Internal server error' ,
            error : error
        });
    }
});
router.get('/protected',async(req:Request,res:Response)=>{
    try {
        const payload = req.user;
        console.log("Payload + ",payload);
        res.status(200).json({
            message: 'Hello from Protected route!'
        })
    }catch(error){
        throw error
    }
})
export default router;
