const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const recursoSchema = new Schema({
    name: {
        type: String,
        required: true,
        uinique: true
    },
    categoria: {
        type: mongoose.Types.ObjectId,
    },
    tags: [],
    dependencias: [mongoose.Types.ObjectId]
})

module.exports = model('Recurso', recursoSchema)