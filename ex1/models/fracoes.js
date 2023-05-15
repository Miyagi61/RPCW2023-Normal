var mongoose = require('mongoose')

var responsavelSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
},{ versionKey: false, _id: false })

var fracoesSchema = new mongoose.Schema({
    fracao: String,
    permilagem: Number,
    mensalidade: Number,
    responsavel: responsavelSchema,
},{ versionKey: false })
    
module.exports = mongoose.model('fracoes',fracoesSchema)
    
  