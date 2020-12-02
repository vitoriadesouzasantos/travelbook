// ligar o servidor
const express = require('express');
// manipular as rotas dentro do servidor 
const router = express.Router();
// importando o sequelize que vem do modules para o arquivo
const sequelize = require('../models').sequelize;
// importando o modulo relato para conseguir enviar os dados para o banco de dados
const Relato = require('../models').Relatos;


// coletando os dados digitados pelo o usario e enviando para o azure
router.post('/cadastrarRelato', function(req, res, next) {
    console.log('Criando Relato');

    Relato.create({
        titulo: req.body.titulo_relato,
        local_viagem: req.body.local_relato,
        link: req.body.link_midia,
        relato: req.body.texto_relato,
        fk_usuario: req.body.fkUsuario
    }).then(resultado => {
        console.log(`Registro criado : ${resultado}`);
        res.send(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    })
});

module.exports = router;