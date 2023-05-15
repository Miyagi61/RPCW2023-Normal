var Movimentos = require("../models/movimentos")
var mongoose = require('mongoose')

// Movimentos list

module.exports.getTotal = () => {
    return Movimentos.aggregate([{$group:{_id:"$tipo",total:{$sum:"$valor"}}}])
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.list = () => {
    return Movimentos.find({},{_id:0})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listPorTipo = tipo => {
    return Movimentos.find({tipo:tipo},{_id:0})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listPorEntidade = entidade => {
    return Movimentos.find({entidade:entidade})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addMovimento = movimento => {
    return Movimentos.create(movimento)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}