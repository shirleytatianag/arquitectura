import { getUser } from "../models/auth.model.js"
import { generateToken } from "../services/token.service.js";


export const login = async (req, res) => {

    try {
        
    let { username, password} = req.query;

    let data = await getUser(username, password);
    console.log('si', data);

    if(!data){
        throw new Error ("Credenciales de accesos incorrectas!")
    }

    res.status(200).json({
        success: true,
        token: generateToken(data),
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