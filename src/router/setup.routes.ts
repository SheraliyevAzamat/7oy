import { Request, Response, NextFunction, Router } from "express";
import { setUp} from "../services/setup.service";

const router = Router();


router.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
 await       setUp()
 res.send("Welcome");
    } catch (error) {
        next(error);
    }

})

export {router as setUpRouter}