import {Router} from "express";
import {login} from "../controllers/auth.controller.js";
import {validate} from "../middlewares/validator.middleware.js";
import {authValidator} from "../validators/auth.validators.js";


const authRouter = Router();

authRouter.post("/", validate(authValidator), login);

export default authRouter;