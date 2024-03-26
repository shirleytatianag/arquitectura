import { checkSchema } from "express-validator";

export const postProductValidator = checkSchema(
    {
        product_name: {
            errorMessage : 'Nombre no valido',
            notEmpty : true,
            isLength: {
                errorMessage: 'El tamaño debe ser mínimo 1',
                options: { min: 1, max: 100}
            }
        },
        product_detail: {
            matches: {
                options: /^[\w\sáéíóúÁÉÍÓÚüÜ]+$/u
            },
            errorMessage: 'No se permiten carácteres especiales'
        }
        ,
        product_price: {
            matches: {
                options: /^[0-9]+$/
            },
            errorMessage: 'Valor no valido'
        }
    }, ["body"]
)