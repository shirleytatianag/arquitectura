import { Router } from "express";
import authRouter from "./auth.routes.js";
import routesProduct from "./producto.routes.js";

const routes = Router();

routes.use('/producto', routesProduct)

routes.use('/auth', authRouter)

export default routes;