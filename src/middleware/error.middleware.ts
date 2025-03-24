import { Request, Response, NextFunction } from "express";

export const errorMiddleware =(err:Error,req:Request,res:Response,next:NextFunction)=>{
 console.error(err.stack);
 res.status(500).json({
success:false,
message:err.message || 'server error'
 });
};