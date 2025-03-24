import { NextFunction, Request, Response } from "express";
import { createCountry,getAllCountry,getOneCountry,updateCountry,deleteCountry } from "../services/country.service";

export const countryController = {
   
    
    async create(req:Request,res:Response,next:NextFunction){
        try {
            const body = req.body;
            const result = await createCountry(body);
        
            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    },
    
    async getAll(req:Request,res:Response,next:NextFunction){
        try {
            const result = await getAllCountry();
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    
    async getOne(req:Request,res:Response,next:NextFunction){
        try {
            const countryId = parseInt(req.params.id);
            const result = await getOneCountry(countryId);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    
    async update(req:Request,res:Response,next:NextFunction){
        try {
            const countryId = parseInt(req.params.id);
            const body = req.body;
            const result = await updateCountry(countryId, body);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    
    async delete(req:Request,res:Response,next:NextFunction){
        try {
            const countryId = parseInt(req.params.id);
            const result = await deleteCountry(countryId);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    }
}