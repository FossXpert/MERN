import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
require('dotenv').config()
//COMMENT ADDED TO CHECK AUTO COMMIT WORKS OR NOT
const secretKey: string = 'Sec3t';
const options: jwt.SignOptions = {
    expiresIn: process.env.EXPIRESIN
};

interface UserPayload extends JwtPayload {
    username: string,
    email : string,
    role : string
}

const generateJWT = (payload:UserPayload) => {
    return jwt.sign(payload, secretKey, options);
};

const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secretKey, (error: jwt.VerifyErrors | null, decodedToken: JwtPayload | string | undefined) => {
            if (error) {
                res.status(401).json({ message: 'Invalid token' });
            } else if (!decodedToken) {
                res.status(401).json({ message: 'Token not provided' });
            } else {
                const userPayload = decodedToken as UserPayload;
                (req as any).payload = userPayload;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Authentication header missing or invalid' });
    }
};

export { generateJWT, authenticateJWT };
