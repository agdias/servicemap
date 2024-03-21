const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categoriaSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = model('Categoria', categoriaSchema);