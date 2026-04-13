import express from 'express';
import perguntarAoGPT from '../implementacao-ia/implementacao.js';

const router = express.Router();

router.post('/', async (req,res) => {
    
    if(!req.body.pergunta || req.body.pergunta === ""){
        return res.status(400).json({
            status: 'Failed',
            message: 'Não foi feita nenhuma pergunta'
        })
    }

    try{
        const resposta = await perguntarAoGPT(req.body.pergunta);

        res.status(200).json({
            status: 'Success',
            resposta
        });

    } catch(error) {
        console.log(error)
        res.status(500).json({
            status: "Erro",
            message: "Erro ao Efetuar perguntar"
        })
    }
});

export default router