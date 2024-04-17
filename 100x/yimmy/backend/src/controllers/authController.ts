import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../models/User';
require('dotenv').config()

const secretKey: string = 'Sec3t';
const options: jwt.SignOptions = {
    expiresIn: '10h'
};

interface UserPayload extends User {
    email: string;
    password: string;
    role: string;
}

const createPayload = (userData: User): UserPayload => {
    try {
        const payload: UserPayload = {
            role: userData.role,
            email: userData.email,
            username: userData.username
        }
        return payload;
    } catch (error) {
        console.log("Error in PayLoad creation")
        throw error;
    }
}

const generateJWT = (userPayload: UserPayload): string => {
    const payload = createPayload(userPayload)
    console.log("createPayload is here : ", payload)
    return jwt.sign(payload, secretKey, options);
};

const authenticateJWT = (req: Request, res: Response, next: NextFunction): boolean | UserPayload => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secretKey, (error: jwt.VerifyErrors | null, decodedToken: JwtPayload | string | undefined) => {
            if (error) {
                res.status(401).json({ message: 'Invalid token' });
                return false;
            } else if (!decodedToken) {
                res.status(401).json({ message: 'Token not provided' });
                return false;
            } else {
                const userPayload = decodedToken as UserPayload;
                (req as any).payload = userPayload;
                next();
                return userPayload;
            }
        });
    } else {
        res.status(401).json({ message: 'Authentication header missing or invalid' });
        return false;
    }
};

export { generateJWT, authenticateJWT };
