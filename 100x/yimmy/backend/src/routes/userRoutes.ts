import express from 'express';
import { Request, Response } from 'express';
import {userSignup,userLogin, check} from '../controllers/userController'; // Import the userSignup function
import { Router } from 'express';
import { authenticateJWT } from '../controllers/signup/jwtHandler';
const router:Router = express.Router();

// Define a route for user signup
router.post('/signup', async (req: Request, res: Response) => {
    try {
        // Call the userSignup function
        await userSignup(req, 'user', res);
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

router.get('/unprotected',async(req:Request,res:Response)=>{
    try {
        res.status(200).json({
            message: 'Hello from unprotected route!'
        })
    }catch(error){
        throw error
    }
})

router.get('/protected',authenticateJWT,async(req:Request,res:Response)=>{
    try {
        res.status(200).json({
            message: 'Hello from Protected route!'
        })
    }catch(error){
        throw error
    }
})
export default router;
