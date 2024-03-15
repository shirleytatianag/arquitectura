import { getProductModel, getProductUniqueModel, postProductModel, putProductModel } from "../models/product.model.js"


export default class ProductController{
    getProduct = async (req, res) =>{
      let data = await getProductModel();
       res.status(200).json({msg: "esto es un get", data: data})
    }

    getProductUnique = async (req, res) =>{
      let {id} = req.params;
      let data = await getProductUniqueModel(id);
      res.status(200).json({msg: "esto es un get unico", data: data})
    }

      postProduct = async (req, res) => {
        let {product_name, product_detail, product_price} = req.body;
        let data = await postProductModel(product_name, product_detail, product_price)
        res.status(200).json({msg: "esto es un post", data: data})
    }

    putProduct = async (req, res) => {
      let {id} = req.params
      let {product_name, product_detail, product_price} = req.body;
      let dataProduct = await getProductUniqueModel(id);
      if(dataProduct){
        let data = await putProductModel(product_name, product_detail, product_price, id)
        res.status(200).json({msg: "esto es un post", data: data})
      } else{
        console.log('no encontré nada');
        res.status(404).json({msg: "Pailas, eso no existe mi reina"})

      }

  }


}


