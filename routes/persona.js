const express = require('express');
const app = express();
const { Personas } = require('../json/data.json');

/**
 * @swagger
 * components:
 *      schemas:
 *          Persona:
 *              type: object
 *              properties:
 *                  nombre:
 *                      type: string
 *                      example: Rene
 *                  apellido:
 *                      type: string
 *                      example: Sanchez
 *                  edad:
 *                      type: number
 *                      example: 21
 *                  id:
 *                      type: number
 *                      example: 1
 * 
 *          List_Persona:
 *              type: object
 *              properties:
 *                  Personas:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Persona'
 */

/**
 * @swagger
 * /Personas:
 *  get:
 *      tags:
 *          - Persona
 *      description: Retorna una lista de personas
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Listado de personas
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/List_Persona'
 */
app.get("/Personas", (req, res) => {
    res.status(200).json({ Personas });
});

module.exports = app;