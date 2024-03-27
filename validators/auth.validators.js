import { checkSchema } from "express-validator";

export const authValidator = checkSchema(
    {
        username: {
            errorMessage : 'Campo requerido',
            notEmpty : true,
            isLength: {
                errorMessage: 'El tamaño debe ser mínimo 1',
                options: { min: 1, max: 100}
            }
        },
        password: {
            notEmpty : true,
            errorMessage: 'Campo requerido',
            isLength: {
                errorMessage: 'El tamaño debe ser mínimo 1',
                options: { min: 1, max: 100}
            }
        }
    }, ["body"]
)