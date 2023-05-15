var express = require('express');
var router = express.Router();
var Contracts = require('../controller/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  Contracts.list()
    .then(dados => {
      res.render('index', {empregos: dados})
    })
    .catch(erro => res.render('error', {error: erro}))
});

router.get('/:id', function(req, res, next) {
  Contracts.getContract(req.params.id)
    .then(dados => {
      res.render('contrato', {a: dados})
    }
    )
    .catch(erro => res.render('error', {error: erro}))
});

router.get('/inst/:nipc', function(req, res, next) {
  Contracts.getInstituicao(req.params.nipc)
    .then(dados => {
      res.render('instituicao', {empregos: dados})
    }
    )
    .catch(erro => res.render('error', {error: erro}))
});
module.exports = router;
