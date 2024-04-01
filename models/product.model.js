import pgService from "../services/pg.service.js"

export const getProductModel = async () => {
    try {
        const pg = new pgService();
        return await pg.connection.query(
            `SELECT * FROM PRODUCT`
        )
    } catch (error) {
        return 'Ha habido un error,' + error;
    }
}

export async function getProductById(product_id){
    try {
        const pg = new pgService();
        const product = await pg.connection.oneOrNone(
            `SELECT * FROM PRODUCT WHERE PRODUCT_ID = $1`, 
            [product_id]
        )
        
        if(!product) {
            return { data: "Producto no encontrado", status: 404}
        }

        return { data: product, status: 200 }
    } catch (error) {
        return {data: 'Ups!, ha ocurrido un problema', status: 500}
    }
}

export const createProductModel = async (dataRequest) => {
    try {
        const pg = new pgService()
        
        const producExists = await pg.connection.oneOrNone(`SELECT * FROM PRODUCT WHERE PRODUCT_NAME = $1`, [dataRequest.product_name])

        if(producExists){
            return {data: 'No es posible agregar este producto porque ya existe', status: 400}
        }

        const productResponse = await pg.connection.one(
            `INSERT INTO PRODUCT (PRODUCT_NAME, PRODUCT_DETAIL, PRODUCT_PRICE)
            VALUES ($1, $2, $3) RETURNING *`,
            [dataRequest.product_name, dataRequest.product_detail, dataRequest.product_price]
        )
        return {data: productResponse, status: 201}
    } catch (error) {
        
        return {data: 'Ups, ha habido un problema, reintenta más tarde', status: 500}
    }

}


export const putProductModel = async (dataRequest, product_id) => {
    try {
        const pg = new pgService()

        const productExists = await pg.connection.oneOrNone(`SELECT * FROM PRODUCT WHERE PRODUCT_ID = $1`, [product_id]);
        
        if (!productExists){
            return {data: 'El producto que intentas actualizar no existe :(', status: 404}
        }

        const productNameExists = await pg.connection.query(`SELECT * FROM PRODUCT WHERE PRODUCT_NAME = $1`, [dataRequest.product_name]);

        if (productNameExists[0] && productNameExists[0].product_id != product_id){
            return {data: 'Ya existe un producto con ese nombre :(', status: 400}
        }

        await pg.connection.query(
            `UPDATE PRODUCT 
            SET PRODUCT_NAME = $1, 
            PRODUCT_DETAIL = $2, 
            PRODUCT_PRICE = $3 
            WHERE PRODUCT_ID = $4`,
            [dataRequest.product_name, dataRequest.product_detail, dataRequest.product_price, product_id])
        
        return {data: 'Producto actualizado con éxito', status: 200}
        
    } catch (error) {
        return {data: 'Ups, ha habido un problema, reintenta más tarde', status: 500}
    }
}


export const deleteProductById =  async(product_id) =>{
    try {
        const pg = new pgService();
        const existsProduct =  await pg.connection.oneOrNone(
            `SELECT * FROM PRODUCT WHERE PRODUCT_ID = $1`, [product_id]
        )

        if(!existsProduct){
            return {data: 'El producto que intenta eliminar no existe :(', status: 404}
        }

        await pg.connection.query(`DELETE FROM PRODUCT WHERE PRODUCT_ID= $1`,[product_id]);
        return {data:"Producto eliminado exitosamente", status:200};


    } catch (error) {
        return {data: 'Ups, ha habido un problema, reintenta más tarde', status: 500}
    }
}