import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config";

declare module "express" {
    interface Request {
        user?: { id: string };
    }
}

export const authGuard = (req: Request, res: Response
    , next: NextFunction):void => {
        try {
           const authHeader = req.headers.authorization;

           if (!authHeader || !authHeader.startsWith("Bearer")) {
               res.status(401).json({message: "unauthorized"});
           }

           const token = authHeader?.split(" ")[1];
           if(!token ){
            throw new Error("no token,authorization denided")
           }

           const secret = process.env.JWT_SECRET;
           if (!secret) {
               throw new Error("JWT_SECRET is not defined in environment variables");
           }

           jwt.verify(token, secret, (err, decoded) => {
            if(err){
                throw new Error("unauthorized:invalid token")
            }
            req.user = { id: (decoded as JwtPayload & { id: string }).id };
           })

           next();
           
        } catch (error) {
            res.status(403).json({message:"invalid or expired token"})
        }
    }