import { productController } from "../controller/product.controller";
import { Router } from "express";

export const productRouter = Router();


productRouter.post('/', productController.create);  
productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getOne);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);