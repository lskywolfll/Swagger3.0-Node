const express = require('express');
const app = express();

app.use(require('./persona.js'))

module.exports = app;