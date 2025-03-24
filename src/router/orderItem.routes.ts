import { orderItemController} from "../controller/orderItem.controller";
import { Router } from "express";

export const orderItemRouter = Router();

orderItemRouter.post('/', orderItemController.create);
orderItemRouter.get('/', orderItemController.getAll);
orderItemRouter.get('/:id', orderItemController.getOne);
orderItemRouter.put('/:id', orderItemController.update);
orderItemRouter.delete('/:id', orderItemController.delete);