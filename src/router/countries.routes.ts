import { countryController } from "../controller/country.controller";
import { Router } from "express";

export const countryRouter = Router();

countryRouter.post('/', countryController.create);
countryRouter.get('/', countryController.getAll);
countryRouter.get('/:id', countryController.getOne);
countryRouter.put('/:id', countryController.update);
countryRouter.delete('/:id', countryController.delete);