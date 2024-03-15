import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const product = new ProductController
console.log(product);

const routesProduct = Router();

routesProduct.get("/", product.getProduct)
routesProduct.get("/:id", product.getProductUnique)
routesProduct.post("/", product.postProduct)
routesProduct.put("/:id", product.putProduct)


export default routesProduct;