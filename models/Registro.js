const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
    medicion: {
        type: Number,
        required: true
    },
    unidad_de_medida: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: String,
        required: true
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Registro', RegistroSchema);