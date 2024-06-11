import pgService from "../services/pg.service.js"

export const getCategories = async () => {
    try {
        const pg = new pgService();
        return await pg.connection.query(
            `SELECT * FROM CATEGORY`
        )
    } catch (error) {
        return 'Ha habido un error,' + error;
    }
}