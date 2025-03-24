
import { createORderItem,deleteOrderItem,getAllOrderItems,getOrderItemById,updateOrderItem } from "../services/order_item.service";
import { Request,Response,NextFunction } from "express";

export const orderItemController = {
    //create
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const result = await createORderItem(body);

            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    }
    ,
    //read all
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await getAllOrderItems();

            res.send(result)
        } catch (error) {
            next(error);
        }
    },
    //read by id
    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await getOrderItemById(id);

            res.send(result)
        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const body = req.body;
            const updatedOrderItem = await updateOrderItem(id, body);

            res.send(updatedOrderItem)
        } catch (error) {
            next(error);
        }
    },
    //delete
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await deleteOrderItem(id);

            res.status(204).send({message:"deleted sucssesful"})
        } catch (error) {
            next(error);
        }
    }
}