var mongoose = require('mongoose')

var pagamentosSchema = new mongoose.Schema({
    fracao: String,
    meses: [Number],
},{ versionKey: false, _id: false })
    
module.exports = mongoose.model('pagamentos',pagamentosSchema)
    
  