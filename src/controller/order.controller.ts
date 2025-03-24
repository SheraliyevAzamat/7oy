import { createOrder,deleteOrder,getAllOrders,getOrderById,updateOrder } from "../services/order.service";
import { Response,Request,NextFunction } from "express";

export const orderController = {
    //create
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const result = await createOrder(body);

            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    },

    //read
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await getAllOrders();

            res.send(result)
        } catch (error) {
            next(error);
        }
    },
    //read by id
    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await getOrderById(id);

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
            const updatedOrder = await updateOrder(id, body);

            res.send(updatedOrder)
        } catch (error) {
            next(error);
        }
    },
    //delete
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await deleteOrder(id);

            res.status(204).send()
        } catch (error) {
            next(error);
        }
    }
}