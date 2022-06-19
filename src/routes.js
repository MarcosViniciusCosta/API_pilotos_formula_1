import { Router } from "express";
import { userController } from "./Controller/UsersController.js";
const routes =  Router();

routes.get("/usuarios", userController.listar_usuario);

routes.post("/usuarios", userController.criar_usuario);

routes.delete("/usuarios/:id", userController.remover_usuario);

routes.put("/usuarios", userController.atualizar_usuario);


export {routes};