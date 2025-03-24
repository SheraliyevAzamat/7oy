import { orderController } from "../controller/order.controller";
import { Router } from "express";

export const orderRouter = Router();

orderRouter.post('/', orderController.create);
orderRouter.get('/', orderController.getAll);
orderRouter.get('/:id', orderController.getOne);
orderRouter.put('/:id', orderController.update);
orderRouter.delete('/:id', orderController.delete);