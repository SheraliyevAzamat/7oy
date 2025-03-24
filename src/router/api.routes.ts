import { Router } from "express";
import { userRouter,countryRouter,merchantActivityRouter,merchantRouter,orderItemRouter,orderRouter,productRouter } from "./index";

export const apiRouter = Router()

apiRouter.use('/user',userRouter)
apiRouter.use('/country',countryRouter)
apiRouter.use('/merchantActivity',merchantActivityRouter)
apiRouter.use('/merchant',merchantRouter)
apiRouter.use('/orderItem',orderItemRouter)
apiRouter.use('/order',orderRouter)
apiRouter.use('/product',productRouter)