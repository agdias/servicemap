const mongoose  = require('mongoose');
const [ Schema, model ] = mongoose;

const servicosSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    coordenacao: String,
    tags: [String],
    dependencias: [mongoose.Types.ObjectId]
})

modules.export = model('Servicos', servicosSchema)
