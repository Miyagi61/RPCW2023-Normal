var express = require('express');
var router = express.Router();
var Movimentos = require('../controllers/movimentos')

/* GET home page. */
router.get('/', function(req, res, next) {
  group = req.query.groupBy
  if(group){
    if(group == "Despesa" || group == "Receita"){
      Movimentos.listPorTipo(group)
        .then(dados => res.status(200).jsonp(dados))
        .catch(erro => res.status(520).jsonp(erro))
    }
    else{
      Movimentos.listPorEntidade(group)
        .then(dados => res.status(200).jsonp(dados))
        .catch(erro => res.status(520).jsonp(erro))
    }
  }
  else{
    Movimentos.list()
      .then(dados => res.status(200).jsonp(dados))
      .catch(erro => res.status(520).jsonp(erro))
  }
});

router.post('/', function(req, res, next) {
  Movimentos.addMovimento(req.body)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
});

module.exports = router;
