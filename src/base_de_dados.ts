import * as fs from 'fs';
import { Piloto } from './types/Piloto';
const CAMINHO: string = "./Database/base_de_dados.txt";


const base_de_dados: Piloto[] = ler_base_de_dados_do_txt();


function salvar_base_de_dados_do_txt(){
    fs.writeFile(CAMINHO, JSON.stringify(base_de_dados), function(err) {
    if (err) {
        console.log(err);
    }
})};

function ler_base_de_dados_do_txt(): Piloto[]
{
    let vetor_retorno:Piloto[] = [];
        try {
            const db = fs.readFileSync(CAMINHO, 'utf8');
            let db_json = JSON.parse(db);
            //console.log("DB = {" + db+"}");
            //console.log("JSON = {" + db_json[0].nome+"}");

           
           

            for(let cont=0;cont<db_json.length;cont++)
            {
                let piloto:Piloto = {"id": 0, "nome": "Padrao"};
                piloto.id = db_json[cont].id;
                piloto.nome = db_json[cont].nome;
                vetor_retorno.push(piloto);
            }
            //console.log(vetor_retorno)
           

          } catch (err) {
            console.error(err);
          }
          return vetor_retorno;
};



export {base_de_dados,ler_base_de_dados_do_txt,salvar_base_de_dados_do_txt};