import { Router } from "express";
import authRouter from "./auth.routes.js";
import routesProduct from "./producto.routes.js";

const routes = Router();


routes.use('/auth', authRouter)

routes.use('/producto', routesProduct)
export default routes;