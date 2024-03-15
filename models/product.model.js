import pgService from "../services/pg.service.js"

export const getProductModel = async () => {
    const pg = new pgService()
    return await pg.connection.query(
        `SELECT * FROM PRODUCT`
    )
}

export async function getProductUniqueModel(id){
    try {
        const pg = new pgService();

        return await pg.connection.oneOrNone(
            `SELECT * FROM PRODUCT WHERE PRODUCT_ID = $1`, 
            [id]
        )
    } catch (error) {
        return 'Ups!, ha ocurrido un problema'
    }
}

export const postProductModel = async (product_name, product_detail, product_price) => {
    const pg = new pgService()
    return await pg.connection.one(
        `INSERT INTO PRODUCT (PRODUCT_NAME, PRODUCT_DETAIL, PRODUCT_PRICE)
        VALUES ($1, $2, $3) RETURNING *`,
        [product_name, product_detail, product_price]
    )
}


export const putProductModel = async (product_name, product_detail, product_price, product_id) => {
    const pg = new pgService()
    return await pg.connection.query(
        `UPDATE PRODUCT 
        SET PRODUCT_NAME = $1, 
        PRODUCT_DETAIL = $2, 
        PRODUCT_PRICE = $3 
        WHERE PRODUCT_ID = $4`,
        [product_name, product_detail, product_price, product_id]
    )
}