var Pagamentos = require("../models/pagamentos")
var mongoose = require('mongoose')

// Pagamentos list
module.exports.list = () => {
    return Pagamentos.find({},{_id:0})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


module.exports.getID = id => {
    return Pagamentos.findOne({id: id},{_id:0})
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}