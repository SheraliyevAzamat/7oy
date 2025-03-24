import { createProductTag,deleteProductTag,getALlProductag,getOneProductTag,updateProductTag } from "../services/product_tag.service";
import { Response,Request,NextFunction } from "express";

export const productTagController = {
    //create
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const result = await createProductTag(body);

            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    },
    //read all
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await getALlProductag();

            res.send(result)
        } catch (error) {
            next(error);
        }
    },
    //read by id
    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await getOneProductTag(id);

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
            const updatedProductTag = await updateProductTag(id, body);

            res.send(updatedProductTag)
        } catch (error) {
            next(error);
        }
    },
    //delete
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const result = await deleteProductTag(id);

            res.status(204).send()
        } catch (error) {
            next(error);
        }
    }
}