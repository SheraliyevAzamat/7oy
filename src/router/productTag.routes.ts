import { productTagController } from "../controller/productTag.controller";
import { Router } from "express";

export const productTagRouter = Router();


productTagRouter.post('/', productTagController.create);
productTagRouter.get('/', productTagController.getAll);
productTagRouter.get('/:id', productTagController.getOne);
productTagRouter.put('/:id', productTagController.update);
productTagRouter.delete('/:id', productTagController.delete);