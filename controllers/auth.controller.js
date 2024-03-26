import { getUser } from "../models/auth.model.js"
import { generateToken } from "../services/token.service.js";


export const login = async (req, res) => {

    try {
        
    let authLoginReq = req.body;

    let authLoginResponse = await getUser(authLoginReq);

    console.log(authLoginResponse);

    if(!authLoginResponse){
        throw new Error ("Credenciales de acceso incorrectas!")
    }

    res.status(200).json({
        success: true,
        token: generateToken(authLoginResponse),
        // user_id: authLoginResponse.user_id,
        msn: 'Logueado correctamente'
    })
    } catch (error) {
        res.status(401).json({
            success: false,
            token: '',
            msn: error.message
        })
    }

}