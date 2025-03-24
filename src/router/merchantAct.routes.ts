import { merchantActivityController } from "../controller/merchantActivity.controller";
import { Router } from "express";

export const merchantActivityRouter = Router();

merchantActivityRouter.post('/', merchantActivityController.create);
merchantActivityRouter.get('/', merchantActivityController.getAll);
merchantActivityRouter.get('/:id', merchantActivityController.getOne);
merchantActivityRouter.put('/:id', merchantActivityController.update);
merchantActivityRouter.delete('/:id', merchantActivityController.delete);