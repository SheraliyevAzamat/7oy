import { createMerchant,deleteMerchant,getAllMerchants,getMerchantById,updateMerchant } from "../services/merchants.service";
import { Request,Response,NextFunction } from "express";

export const merchantController = {
   
    
    async create(req: Request, res: Response, next: NextFunction){
        try {
            const body = req.body;
            const result = await createMerchant(body);
        
            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    },

    
    async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const result = await getAllMerchants();
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },

    
    async getOne(req: Request, res: Response, next: NextFunction){
        try {
            const merchantId = parseInt(req.params.id);
            const result = await getMerchantById(merchantId);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },

    
    async update(req: Request, res: Response, next: NextFunction){
        try {
            const merchantId = parseInt(req.params.id);
            const updatedMerchant = req.body;
            const result = await updateMerchant(merchantId, updatedMerchant);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },

    
    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const merchantId = parseInt(req.params.id);
            const result = await deleteMerchant(merchantId);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    }
}