const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: true,
        },
        ra:{
            type: String,
            required: true,
            unique: true,
        },
        senha: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("Aluno", alunoSchema);