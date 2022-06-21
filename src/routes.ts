import { Router } from "express";
//import { userController } from "./Controller/UsersController.js";
import { usersController} from "./Controller/usersController"

const routes =  Router();
const users_controller = new usersController();

routes.get("/usuarios", users_controller.listar_usuario);

routes.post("/usuarios", users_controller.criar_usuario);

routes.delete("/usuarios/:id", users_controller.remover_usuario);

routes.put("/usuarios", users_controller.atualizar_usuario);


export {routes};