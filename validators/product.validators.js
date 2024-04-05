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
                    const regexNoSpaces = /^(?!.*\s)[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ](?=\S*$)/;
                    const regexNoSpecialChars = /^[^!@#$%^&*(),.?":{}|<>]+$/;
                    
                    if (!value.match(regexNoSpaces)) {
                        throw new Error('No se permiten espacios vacíos antes ni después de la cadena de texto');
                    }

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
                options: /^[0-9]+$/
            },
            errorMessage: 'Solo se permiten números'
        }
    }, ["body"]
)