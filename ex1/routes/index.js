var express = require('express');
var router = express.Router();
var Movimentos = require('../controllers/movimentos')

router.get('/', function(req, res, next) {
    Movimentos.getTotal()
        .then(dados => {
            var rec = 0
            var desp = 0
            for(i = 0; i < dados.length; i++){
                if(dados[i]._id == "Receita")
                    rec = dados[i].total
                else
                    desp = dados[i].total
            }
            res.render('pagPrincipal', { title: 'Express', totalReceitas: rec, totalDespesas: desp});
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
});

module.exports = router;
