import { getUser } from "../models/auth.model.js"


export const login = async (req, res) => {
    let data = await getUser();

    res.status(200).json({
        success: true,
        token: '',
        msn: ''
    })
}