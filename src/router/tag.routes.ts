import { tagController } from "../controller/tags.controller";
import { Router } from "express";

export const tagRouter = Router();


tagRouter.post('/', tagController.create);
tagRouter.get('/', tagController.getAll);
tagRouter.get('/:id', tagController.getOne);
tagRouter.put('/:id', tagController.update);
tagRouter.delete('/:id', tagController.delete);