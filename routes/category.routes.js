import {Router} from "express";
import CategoryController from "../controllers/category.controller.js";

const category = new CategoryController;
const routesCategory = Router();

routesCategory.get('/', category.getCategories)

export default routesCategory;