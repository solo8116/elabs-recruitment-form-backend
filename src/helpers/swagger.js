const swaggerJsDoc = require("swagger-jsdoc")

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Registration Form API",
            version: "1.0.0",
            description: "Elabs Society Registration Form Backend"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["src/docs/*.js"]
}

const specs = swaggerJsDoc(options)

module.exports = specs