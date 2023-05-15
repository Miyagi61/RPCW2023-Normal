var Contracts = require("../models/contracts")
var mongoose = require('mongoose')

// Contracts list
module.exports.list = () => {
    return Contracts.find().sort({id:1})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getContract = id => {
    return Contracts.findOne({id: id},{_id:0})
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}

// Nao funciona
module.exports.getContractAno = ano => {
    return Contracts.find({DataInicioContrato: {$regex: String(ano)}})
            .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}

module.exports.getContractInst = inst => {
    return Contracts.find({NIPCInstituicao:inst}).sort({id:1})
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}


module.exports.getContractCourses = () => {
    return Contracts.distinct("Curso")
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getContractInsts = () => {
    return Contracts.distinct("NomeInstituicao")
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.postContract = contract => {
    return Contracts.create(contract)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.deleteContract = id => {
    return Contracts.deleteOne({id: id})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}