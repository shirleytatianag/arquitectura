import {Router} from "express";
import ProductController from "../controllers/product.controller.js";
import {validate} from "../middlewares/validator.middleware.js";
import {postProductValidator} from "../validators/product.validators.js";

const product = new ProductController;
const routesProduct = Router();

routesProduct.get("/", product.getAllProducts)
routesProduct.get("/:id", product.getProductUnique)
routesProduct.post("/", validate(postProductValidator), product.createProductModel)
routesProduct.put("/:idProduct", validate(postProductValidator), product.putProduct)
routesProduct.delete("/:idProduct", product.deleteProduct)


export default routesProduct;