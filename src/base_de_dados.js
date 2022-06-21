"use strict";
exports.__esModule = true;
exports.salvar_base_de_dados_do_txt = exports.ler_base_de_dados_do_txt = exports.base_de_dados = void 0;
var fs = require("fs");
var CAMINHO = "./Database/base_de_dados.txt";
var base_de_dados = ler_base_de_dados_do_txt();
exports.base_de_dados = base_de_dados;
function salvar_base_de_dados_do_txt() {
    fs.writeFile(CAMINHO, JSON.stringify(base_de_dados), function (err) {
        if (err) {
            console.log(err);
        }
    });
}
exports.salvar_base_de_dados_do_txt = salvar_base_de_dados_do_txt;
;
function ler_base_de_dados_do_txt() {
    var vetor_retorno = [];
    try {
        var db = fs.readFileSync(CAMINHO, 'utf8');
        var db_json = JSON.parse(db);
        //console.log("DB = {" + db+"}");
        //console.log("JSON = {" + db_json[0].nome+"}");
        for (var cont = 0; cont < db_json.length; cont++) {
            var piloto = { "id": 0, "nome": "Padrao" };
            piloto.id = db_json[cont].id;
            piloto.nome = db_json[cont].nome;
            vetor_retorno.push(piloto);
        }
        //console.log(vetor_retorno)
    }
    catch (err) {
        console.error(err);
    }
    return vetor_retorno;
}
exports.ler_base_de_dados_do_txt = ler_base_de_dados_do_txt;
;
