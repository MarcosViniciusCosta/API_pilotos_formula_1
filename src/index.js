import express from "express";
import { routes } from "./routes.js";

const aplicativo = express();
aplicativo.use(express.json());
aplicativo.use(routes);




aplicativo.listen(4567, () => console.log("Servidor rodando"));
