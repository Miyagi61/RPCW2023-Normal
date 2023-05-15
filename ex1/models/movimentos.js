var mongoose = require('mongoose')

var movimentosSchema = new mongoose.Schema({
    numero: String,
    tipo: String,
    data: Date,
    valor: Number,
    entidade: String,
    descricao: String,
},{ versionKey: false, _id: false })
    
module.exports = mongoose.model('movimentos',movimentosSchema)
    
  