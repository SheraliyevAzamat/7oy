import { createProduct,deleteProduct,getAllProducts,getProductById,updateProduct } from "../services/product.service";
import { Request,Response,NextFunction } from "express";


export const productController = {
    //create
    async create(req: Request,res: Response, next: NextFunction){
        try {
            const body = req.body;
            const result = await createProduct(body);
        
            res.status(201).send(result)
        } catch (error) {
            next(error);
        }
    },

    //get all products
    async getAll(req: Request,res: Response, next: NextFunction){
        try {
            const products = await getAllProducts();
            res.send(products)
        } catch (error) {
            next(error);
        }
    },

    //get product by id
    async getOne(req: Request,res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const product = await getProductById(id);
        
            res.send(product)
        } catch (error) {
            next(error);
        }
    },

    //update product by id
    async update(req: Request,res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const body = req.body;
            const updatedProduct = await updateProduct(id, body);

            res.send(updatedProduct)
        } catch (error) {
            next(error);
        }
    },

    //delete product by id
    async delete(req: Request,res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const result = await deleteProduct(id);
        
            res.status(200).send(result)
        } catch (error) {
            next(error);
        }
    }
}