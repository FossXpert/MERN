import express, { Router ,Request,Response} from 'express';
import { generateJWT, authenticateJWT } from '';
import cors from 'cors';


const router: Router = express.Router();
router.use(cors());


router.post("/signup", async (req: Request, res: Response)=>{
    try{
        const adminModel = require('../model/admin.cjs')
        const userExist = await adminModel.findOne({email : req.body.email})

        if(userExist){
            return res.status(409).send({
                message : "User Exist Mate , Back OFF!"
            })}
        const {firstName, lastName, email, password } = req.body;
        const newAdmin = new adminModel({
        firstName:firstName, lastName:lastName, email:email, 
        password:password })
        await newAdmin.save()

        const token = generateJWT(newAdmin.userName)
        res.status(200).send({
            message : "Signed Up SuccessFully",
            token : token
        })
    }catch(error){
        console.log(error)
        res.send({
            message : "Error in saving SignUp Data",
            error : error.message
        })   
    }
})