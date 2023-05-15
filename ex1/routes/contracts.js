var express = require('express');
var router = express.Router();
var Contracts = require('../controllers/contracts')

/* GET home page. */
router.get('/', function(req, res, next) {
  year = req.query.year
  inst = req.query.inst

  if(year){
    Contracts.getContractAno(year)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
  }
  else if(inst){
    Contracts.getContractInst(inst)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
  }
  else{
    Contracts.list()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
  }
});

router.get('/courses', function(req, res, next) {
  Contracts.getContractCourses()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
});  


router.get('/institutions', function(req, res, next) {
  Contracts.getContractInsts()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  Contracts.getContract(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
});


router.post('/', function(req, res, next) {
  Contracts.postContract(req.body)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  Contracts.deleteContract(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(520).jsonp(erro))
});

module.exports = router;
