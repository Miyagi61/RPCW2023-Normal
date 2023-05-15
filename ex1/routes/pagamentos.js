var express = require('express');
var router = express.Router();
var Pagamentos = require('../controllers/pagamentos')
//var Ligacoes = require('../controllers/ligacoes')

function getNomePorId(nomes, id){
  for (j = 0 ; j < nomes.length ; j++){
    if(nomes[j].id == id){
      return nomes[j].nome
    }
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.status){
    mes = req.query.status
    Pagamentos.list()
    .then(dados => {
      array = []
      for (i = 0 ; i < dados.length ; i++){
        dic = {}
        for(j = 0 ; j < dados[i].mes.length && j < mes ; j++){
          if(dados[i].mes[j] == 0){
            if(dic[dados.fracao])
              dic[dados.fracao] += 1
            else
              dic[dados.fracao] = 1 
          }
        }
        array.push(dic)
      }
      res.status(200).jsonp(array)
    })
    .catch(erro => res.status(520).jsonp(erro))
  }
  else{
    Pagamentos.list()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
  }
});

router.get('/:id', function(req, res, next) { 
  Pagamentos.getID(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
});

module.exports = router;
