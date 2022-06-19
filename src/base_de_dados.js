import * as fs from 'fs';
const CAMINHO = "./Database/base_de_dados.txt";


const base_de_dados = ler_base_de_dados_do_txt();


function salvar_base_de_dados_do_txt(){
    fs.writeFile(CAMINHO, JSON.stringify(base_de_dados), function(err) {
    if (err) {
        console.log(err);
    }
})};

function ler_base_de_dados_do_txt(){
    let db;
        try {
            const db = fs.readFileSync(CAMINHO, 'utf8');
            let db_json = JSON.parse(db);
            //console.log("DB = {" + db+"}");
            //console.log("JSON = {" + db_json[0].nome+"}");

            let vetor_retorno = [];
           

            for(let cont=0;cont<db_json.length;cont++)
            {
                let piloto = {"id": 0, "nome": "Padrao"};
                piloto.id = db_json[cont].id;
                piloto.nome = db_json[cont].nome;
                vetor_retorno.push(piloto);
            }
            //console.log(vetor_retorno)
            return vetor_retorno;

          } catch (err) {
            console.error(err);
          }

};



export {base_de_dados,ler_base_de_dados_do_txt,salvar_base_de_dados_do_txt};