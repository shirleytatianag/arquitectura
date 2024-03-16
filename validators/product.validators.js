import { checkSchema } from "express-validator";

export const postProductValidator = checkSchema(
    {
        nombre: {
            errorMessage : 'Nombre no valido',
            notEmpty : true,
            isLength: {
                errorMessage: 'El tamaño debe ser mínimo 1',
                options: { min: 1, max: 100}
            }
        },
        valor: {
            matches: {
                options: /^[0-9]+$/
            },
            errorMessage: 'Valor no valido'
        }
    }, ["body"]
)