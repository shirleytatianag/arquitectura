import { Router } from "express";
import ProductController from "../controllers/product.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductValidator } from "../validators/product.validators.js";

const product = new ProductController 
const routesProduct = Router();
 
routesProduct.get("/", product.getProduct)
routesProduct.get("/:id", product.getProductUnique)
routesProduct.post("/", validate(postProductValidator), product.postProduct)
routesProduct.put("/:id", product.putProduct)


export default routesProduct;