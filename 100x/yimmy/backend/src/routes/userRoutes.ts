import express from 'express';
import { Request, Response } from 'express';
import {userSignup,userLogin, check} from '../controllers/userController'; // Import the userSignup function
import { Router } from 'express';
const router:Router = express.Router();
import { User } from '@auth0/auth0-react';
import axios from 'axios';

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
    try{
        const authToken = req.headers.authorization?.split(' ')[1];
        const response = await axios.get('https://dev-cd616eaxtu7so5dm.us.auth0.com/userinfo',{
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        })
        if(response.status >=200 && response.status <300){
            const data = await response.data;
            console.log(data);
            res.status(response.status).json({
                message:'Success',
                data:data
            })
        }else{
            console.log('Request failed : ', response.statusText);
            res.status(response.status).json({
                message:'Request failed',
                data:response.statusText
            })
        }
    }catch(error){
        console.error('Error in protected route:', error);
        throw error
    }
})
export default router;
