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
            custom: {
                options: (value, { req }) => {
                    const regexNoSpecialChars = /^[^!@#$%^&*()?":{}|<>]+$/;
                    

                    if (!value.match(regexNoSpecialChars)) {
                        throw new Error('No se permiten caracteres especiales');
                    }

                    return true;
                }
            },
            errorMessage: 'Detalle de producto no válido'
        },
        product_price: {
            matches: {
                options: /^\d+(\.\d+)?$/
            },
            errorMessage: 'Solo se permiten números'
        },
        product_image: {
            errorMessage : 'Debes agregar una imagen como mínimo',
            notEmpty : true,
        },
        category_id: {
            errorMessage : 'Debes agregar una categoria valida',
            notEmpty : true,
            matches: {
                options: /^[0-9]+$/,
                errorMessage: 'Solo se permiten números'
            },
        },
    }, ["body"]
)