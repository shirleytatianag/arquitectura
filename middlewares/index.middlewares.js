import {Router} from "express";
import {verifyToken} from "./token.middleware.js";

const middleware = Router();

// Proteger  lo que entra primero entra al middleware
middleware.use("/producto", verifyToken)
middleware.use("/category", verifyToken)

export default middleware