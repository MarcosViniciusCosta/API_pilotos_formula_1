import { Request, Response } from "express";
import { base_de_dados,salvar_base_de_dados_do_txt } from "../base_de_dados";
import { Piloto } from "../types/Piloto";



export class usersController {
    criar_usuario(request: Request, response: Response): Response 
    {
    
        const piloto = request.body;
    
        // validação
        if(piloto.nome.length <1 )
        {
            return response.status(403).json({retorno: "Nome do piloto deve ter ao menos uma letra"});
        }
    
        base_de_dados.push(piloto);
        salvar_base_de_dados_do_txt();
        return response.status(201).json(base_de_dados); 
    }

    listar_usuario(request: Request, response: Response) :Response
    {
        
        return response.status(200).json(base_de_dados);
    }

    remover_usuario(request: Request ,response: Response) :Response{
        let id_alvo = Number(request.params.id);

       for(let cont=0;cont<base_de_dados.length;cont++)
       {
            if(base_de_dados[cont].id === id_alvo)
            {
                base_de_dados.splice(cont,1);
            }
       }
        salvar_base_de_dados_do_txt();
        return response.status(200).json(base_de_dados);
    }
    atualizar_usuario(request: Request, response: Response) :Response
    {
        let id_alvo = Number(request.body.id);

       for(let cont=0;cont<base_de_dados.length;cont++)
       {
            if(base_de_dados[cont].id === id_alvo)
            {
                base_de_dados[cont] = request.body;
            }
       }
       salvar_base_de_dados_do_txt();
       return response.status(200).json(base_de_dados);
    }
};

