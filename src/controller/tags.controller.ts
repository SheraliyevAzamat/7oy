import { createTags, deleteTag, getAllTags, getTagById, updateTag } from "../services/tags.service";
import { Request,Response,NextFunction } from "express";

export const tagController = {
    //create
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const result = await createTags(body);

            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    },
    //read all
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await getAllTags();
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    //read one
    async getOne(req: Request, res: Response, next: NextFunction):Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const result = await getTagById(id);


            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    },
    //update
    async update(req: Request, res: Response, next: NextFunction):Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const body = req.body;
            const updatedTag = await updateTag(id, body);

            res.send(updatedTag)
        } catch (error) {
            next(error);
        }
    },
    //delete
    async delete(req: Request, res: Response, next: NextFunction):Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const result = await deleteTag(id);

            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    }
}