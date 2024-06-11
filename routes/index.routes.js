import { Router } from "express";
import authRouter from "./auth.routes.js";
import routesProduct from "./producto.routes.js";
import routesCategory from "./category.routes.js";

const routes = Router();


routes.use('/auth', authRouter)

routes.use('/producto', routesProduct)

routes.use('/category', routesCategory )

export default routes;