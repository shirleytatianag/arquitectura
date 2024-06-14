import {
    getProductModel,
    getProductById,
    createProductModel,
    putProductModel,
    deleteProductById
} from "../models/product.model.js"


export default class ProductController {
    getAllProducts = async (req, res) => {
        console.log('Get all products');
        let data = await getProductModel();
        res.status(200).json(data)
    }

    getProductUnique = async (req, res) => {
        console.log('Get product by Id');
        let {id} = req.params;
        if (!id.match(/^\d+$/)) {
            return res.status(400).json("ID inválido");
        }
        let data = await getProductById(id);
        res.status(data.status).json(data.data)
    }

    createProductModel = async (req, res) => {
        console.log('Create a product');
        let dataRequest = req.body;
        let data = await createProductModel(dataRequest)
        res.status(data.status).json(data.data)
    }

    putProduct = async (req, res) => {
        console.log('Update product by Product Id');
        let {idProduct} = req.params;
        if (!idProduct.match(/^\d+$/)) {
            return res.status(400).json("ID inválido");
        }
        let dataRequest = req.body;
        let data = await putProductModel(dataRequest, idProduct)
        res.status(data.status).json(data);
    }


    deleteProduct = async (req, res) => {
        console.log('Delete product by Product Id');
        let {idProduct} = req.params;
        if (!idProduct.match(/^\d+$/)) {
            return res.status(400).json("ID inválido");
        }
        let data = await deleteProductById(idProduct)
        res.status(data.status).json(data.data);
    }

}


