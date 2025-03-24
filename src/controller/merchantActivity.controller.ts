import { createMerchantActivity, deleteMerchantActivity, getAllMerchantActivities, getMerchantActivityById, updateMerchantActivity } from "../services/merchantActivity.service";
import { Request, Response, NextFunction } from "express";


export const merchantActivityController = {
    //create
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const result = await createMerchantActivity(body);

            res.status(201).send(result)
        } catch (error) {

        }
    },
    //read all
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await getAllMerchantActivities();

            res.send(result)
        } catch (error) {

        }
    },
    //read by id
    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await getMerchantActivityById(id);

            res.send(result)
        } catch (error) {

        }
    },
    //update
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const body = req.body;
            const updatedMerchantActivity = await updateMerchantActivity(id, body);

            res.send(updatedMerchantActivity)
        } catch (error) {

        }
    },
    //delete
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await deleteMerchantActivity(id);

            res.status(204).send()
        } catch (error) {

        }
    }
}