import pgService from "../services/pg.service.js";

export const getUser = async (authLoginReq)=>{
        const pg = new pgService();
        return await pg.connection.oneOrNone(`SELECT USER_ID FROM USERS
        WHERE USER_NAME = $1 AND USER_PASSWORD = $2`, [authLoginReq.username, authLoginReq.password])
}