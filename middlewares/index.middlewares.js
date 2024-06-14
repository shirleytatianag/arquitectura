import {Router} from "express";
import {verifyToken} from "./token.middleware.js";

const middleware = Router();

//Proteger todo lo que entra primero entra al middleware
middleware.use("/producto", verifyToken)

export default middleware