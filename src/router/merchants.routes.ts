import { merchantController } from "../controller/merchant.controller";
import { Router } from "express";

export const merchantRouter = Router();

merchantRouter.post('/', merchantController.create);
merchantRouter.get('/', merchantController.getAll);
merchantRouter.get('/:id', merchantController.getOne);
merchantRouter.put('/:id', merchantController.update);
merchantRouter.delete('/:id', merchantController.delete);