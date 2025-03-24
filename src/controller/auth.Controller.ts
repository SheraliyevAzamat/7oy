import { Request,Response } from "express";
import generateToken from "../utils/geerateToken";

export const register = (req: Request, res: Response)=>{
    try {
    
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({message:'server error'})
        
    }
}

export const login= (req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({message:'server error'})
        
    }
}