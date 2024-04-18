import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/User";
require("dotenv").config();

const secretKey: string = "Sec3t";
const options: jwt.SignOptions = {
  expiresIn: "10h",
};

interface userPayload extends User {
  email: string;
  password: string;
  role: string;
}

interface customRequest extends Request {
  payload: userPayload | JwtPayload;
}

const createPayload = (userData: User) => {
  try {
    const payload = {
      role: userData.role,
      email: userData.email,
      username: userData.username,
    };
    return payload;
  } catch (error) {
    console.log("Error in PayLoad creation");
    throw error;
  }
};
const generateJWT = (userPayload: User) => {
  const payload = createPayload(userPayload);
  console.log("createPayload is here : ", payload);
  return jwt.sign(payload, secretKey, options);
};
const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(
      token,
      secretKey,
      (
        error: jwt.VerifyErrors | null,
        decodedToken: jwt.JwtPayload | string | undefined,
      ) => {
        if (error) {
          res.status(401).json({ message: "Invalid token" });
        } else if (!decodedToken) {
          res.status(401).json({ message: "Token not provided" });
        } else {
          const decoded = decodedToken as userPayload;
          console.log("User payload:", decoded);
          (req as customRequest).payload = decoded;
          console.log("Request as custom request", (req as customRequest).payload);
          next();
        }
      },
    );
  } else {
    res
      .status(401)
      .json({ message: "Authentication header missing or invalid" });
  }
};

export { generateJWT, authenticateJWT };
