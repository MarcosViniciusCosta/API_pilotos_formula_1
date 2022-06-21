const express = require("express");
import { routes } from "./routes";

const aplicativo = express();
aplicativo.use(express.json());
aplicativo.use(routes);




aplicativo.listen(4567, () => console.log("Servidor rodando"));
