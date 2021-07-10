const express = require('express');
const bodyParse = require("body-parser");
const cors = require('cors');
const { dirname } = require('path');
const { stringify } = require('querystring');

const app = express();

// pasa por las funciones en todas las peticiones
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(cors());

module.exports = app;