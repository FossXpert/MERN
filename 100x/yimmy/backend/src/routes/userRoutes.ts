import express from 'express';
import { Request, Response } from 'express';
import {userSignup,userLogin} from '../controllers/userController'; // Import the userSignup function
import { Router } from 'express';
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
router.post('/login/:role', async (req: Request, res: Response) => {
    try {
        const role = req.query.role;
        // Call the userSignup function
        await userLogin(req,role, res);
    } catch (error:any) {
        console.error('Error in user Login:', error);
        res.status(500).json({ message: 'Internal server error' ,
            error : error
        });
    }
});
export default router;
