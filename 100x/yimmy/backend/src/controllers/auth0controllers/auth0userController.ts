import axios from "axios";
import { Response } from "express";
import { Request } from "express-jwt";

export const login = async(req:Request,res:Response) => {
    
}

export const userData = async(req:Request,res:Response) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const response = await axios.get('https://dev-cd616eaxtu7so5dm.us.auth0.com/userinfo',{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        if(response.status >=200 && response.status<300){
            res.status(response.status).json({
                message : "Request Success",
                userData : response.data
            })
        }else{
            console.log('Request failed : ', response.statusText);
            res.status(response.status).json({
                message:'Request failed',
                data:response.statusText
            })
        }
        
    } catch (error) {
        
    }
}
/*
add these in index.ts
//for oauth
const jwtCheck = auth({
    audience: 'This is a unique Identifier',
    issuerBaseURL: 'https://dev-cd616eaxtu7so5dm.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});
app.use(jwtCheck)
*/

