"use strict";
exports.__esModule = true;
var express = require("express");
var routes_1 = require("./routes");
var aplicativo = express();
aplicativo.use(express.json());
aplicativo.use(routes_1.routes);
aplicativo.listen(4567, function () { return console.log("Servidor rodando"); });
