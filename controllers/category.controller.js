import { getCategories } from "../models/category.model.js";

export default class CategoryController{
    
    getCategories = async (req, res) =>{
        console.log('Get all categories');
        let data = await getCategories();
         res.status(200).json(data)
      }
}