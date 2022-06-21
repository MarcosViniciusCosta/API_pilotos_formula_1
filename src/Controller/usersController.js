"use strict";
exports.__esModule = true;
exports.usersController = void 0;
var base_de_dados_1 = require("../base_de_dados");
var usersController = /** @class */ (function () {
    function usersController() {
    }
    usersController.prototype.criar_usuario = function (request, response) {
        var piloto = request.body;
        // validação
        if (piloto.nome.length < 1) {
            return response.status(403).json({ retorno: "Nome do piloto deve ter ao menos uma letra" });
        }
        base_de_dados_1.base_de_dados.push(piloto);
        (0, base_de_dados_1.salvar_base_de_dados_do_txt)();
        return response.status(201).json(base_de_dados_1.base_de_dados);
    };
    usersController.prototype.listar_usuario = function (request, response) {
        return response.status(200).json(base_de_dados_1.base_de_dados);
    };
    usersController.prototype.remover_usuario = function (request, response) {
        var id_alvo = Number(request.params.id);
        for (var cont = 0; cont < base_de_dados_1.base_de_dados.length; cont++) {
            if (base_de_dados_1.base_de_dados[cont].id === id_alvo) {
                base_de_dados_1.base_de_dados.splice(cont, 1);
            }
        }
        (0, base_de_dados_1.salvar_base_de_dados_do_txt)();
        return response.status(200).json(base_de_dados_1.base_de_dados);
    };
    usersController.prototype.atualizar_usuario = function (request, response) {
        var id_alvo = Number(request.body.id);
        for (var cont = 0; cont < base_de_dados_1.base_de_dados.length; cont++) {
            if (base_de_dados_1.base_de_dados[cont].id === id_alvo) {
                base_de_dados_1.base_de_dados[cont] = request.body;
            }
        }
        (0, base_de_dados_1.salvar_base_de_dados_do_txt)();
        return response.status(200).json(base_de_dados_1.base_de_dados);
    };
    return usersController;
}());
exports.usersController = usersController;
;
