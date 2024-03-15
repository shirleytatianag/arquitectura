import jwt from "jsonwebtoken";


export const generateToken = () => {
    let token = jwt.sign({

    }, '')
}