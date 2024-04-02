const express = require('express')
const router = express.Router()
const { generateJWT , authenticateJWT} = require('../auth/auth.cjs');
const cors = require('cors');
router.use(cors());


router.post("/signup",async (req,res) => {
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
router.post('/login',async (req,res) => {

    try{
        const adminModel = require('../model/admin.cjs')
        const {email,password} = req.body;
        const adminExist = await adminModel.findOne({email : email})
        if(!adminExist){
            return res.status(401).json({
                message :"User Not Exist , Please Signup"
            })
        }
        const isValidPassword =  adminExist.password ===password
        if(!isValidPassword){
            return res.status(401).send({
                message : "Invaid Password"
            })
        }

        const token  = generateJWT(adminExist.email)
        res.status(200).send({
            message : "Logged In Successfully",
            token : token
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            message : "Login Failed",
            error : error.message
        })
    }   
})
module.exports = router