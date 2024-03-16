import pgService from "../services/pg.service.js";

export const getUser = async (username, password)=>{
    const pg = new pgService();
    return await pg.connection.oneOrNone(`SELECT USER_NAME FROM USERS
    WHERE USER_NAME = $1 AND USER_PASSWORD = $2`, [username, password])
}