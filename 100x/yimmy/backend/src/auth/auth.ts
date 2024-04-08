import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const secretKey : string = 'Sec3t';
const options :jwt.SignOptions = {
    expiresIn : '10h'
};

const generateJWT = (userName:string) : string => {
    const payload = {userName}
    return jwt.sign(payload,secretKey,options)
};

const authenticateJWT = (req:Request,res : Response,next :NextFunction):string => {

    const auth = req.headers.get('authorization');
    if(auth){
        const token = auth.split(' ')[1];
        jwt.verify(token, secretKey,(error : any,user : any)=>{
            if(error){
                res.status(500).send({
                    message : 'Sorry , Token Extraction issue Ocurred'
                });
            }else{
                req.user  =user;
                next();
            }
        })
    }else {
        res.status(500).send({
            message : "Auth Header is missing, Please Check"
        })
    }
}