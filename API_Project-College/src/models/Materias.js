const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
    materia: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    duracao: {
        type: String,
        required: true,
    },
    prof: {
        type: String,
        required: true,
    },
    dias: {
        type: String,
        required: true,
    },
    sala: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Materias", materiaSchema);