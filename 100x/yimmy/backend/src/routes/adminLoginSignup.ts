import express, { Router ,Request,Response} from 'express';
import cors from 'cors';



const router: Router = express.Router();
router.use(cors());

interface adminSignupBody{
    fullName?:string;
    emailId: string;
    password : string;
}
router.post('/signup',async (req:Request,res:Response)=>{
    try {       
        //to check whether user exist or not
        const adminExist : 
    } catch (error:any) {
        console.log("Error in sign up : ", error);
        res.status(400).json({message:"Something went wrong"});        
    }
})

export default router;