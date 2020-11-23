const express = require('express');
const router = express.Router();
const sequelize = require('../models').sequelize;
const Relato = require('../models').Relatos;

router.post('/cadastrarRelato', function(req, res, next) {
    console.log('Criando Relato');

    Relato.create({
        titulo: req.body.titulo_relato,
        local_viagem: req.body.local_relato,
        link: req.body.link_midia,
        relato: req.body.texto_relato
    }).then(resultado => {
        console.log(`Registro criado : ${resultado}`);
        res.send(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    })
});

module.exports = router;