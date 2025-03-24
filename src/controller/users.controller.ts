import { NextFunction, Request, Response } from "express";
import { createUser,getAllUsers,getOneUser,updateUser,deleteUser } from "../services/users.service";

export const userController = {
    //create
    async create(req:Request,res:Response,next:NextFunction){
        try {
            const body = req.body;
            const result = await createUser(body);
        
            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    },
    //get all
    async getAll(req:Request,res:Response,next:NextFunction){
        try {
            const result = await getAllUsers();
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    //get one
    async getOne(req:Request,res:Response,next:NextFunction){
        try {
            const userId = req.params.id;
            const result = await getOneUser(userId);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req:Request,res:Response,next:NextFunction){
        try {
            const userId = parseInt(req.params.id);
            const body = req.body;
            const result = await updateUser(userId, body);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    //delete
    async delete(req:Request,res:Response,next:NextFunction){
        try {
            const userId = parseInt(req.params.id);
            const result = await deleteUser(userId);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
}