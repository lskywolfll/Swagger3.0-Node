const express = require('express');
const app = express();
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const { host, port } = require('./config/index');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Swagger3.0 NodeJS",
        version: "1.0.0",
        description: "Documentar con swagger",
        contact: {
            name: "Rene",
            url: "https://github.com/lskywolfll"
        },
        license: {
            name: "MIT",
            url: "http://localhost"
        }
    },
    basePath: "/",
    server: [
        {
            url: `http://${host}:${port}`
        },
        {
            url: `http://${host}`
        }
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    schemas: ["http", "https"]
};

const routesApis = ["routes/*.js"];

const options = {
    swaggerDefinition,
    apis: routesApis
};

const specs = swaggerJsdoc(options);

app.use(cors());

app.use("/api-docs", swaggerUI.serve);

app.get("/api-docs", swaggerUI.setup(specs, { explorer: true, swaggerOptions: options }));

app.use(require('./routes/index'));

app.listen(port, () => {
    console.log(`Server listening on: http://${host}:${port}`);
});
