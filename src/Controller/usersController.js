import { base_de_dados,salvar_base_de_dados_do_txt } from "../base_de_dados.js";



const userController = {
    criar_usuario(req,res) 
    {
    
        const piloto = req.body;
    
        // validação
        if(piloto.nome.length <1 )
        {
            return res.status(403).json({retorno: "Nome do piloto deve ter ao menos uma letra"});
        }
    
        base_de_dados.push(piloto);
        salvar_base_de_dados_do_txt();
        return res.status(201).json(base_de_dados); 
    },
    listar_usuario(req,res)
    {
        
        res.status(200).json(base_de_dados);
    },
    remover_usuario(req,res){
        let id_alvo = Number(req.params.id);

       for(let cont=0;cont<base_de_dados.length;cont++)
       {
            if(base_de_dados[cont].id === id_alvo)
            {
                base_de_dados.splice(cont,1);
            }
       }
        salvar_base_de_dados_do_txt();
        res.status(200).json(base_de_dados);
    },
    atualizar_usuario(req,res)
    {
        let id_alvo = Number(req.body.id);

       for(let cont=0;cont<base_de_dados.length;cont++)
       {
            if(base_de_dados[cont].id === id_alvo)
            {
                base_de_dados[cont] = req.body;
            }
       }
       salvar_base_de_dados_do_txt();
       res.status(200).json(base_de_dados);
    }
};


export {userController};