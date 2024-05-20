import { Request } from "express";
import { iUser } from "../models/user";


declare global {
    namespace Express{
        export interface jwtPayloadNeww extends Request {
            user : iUser
        }
    }
}