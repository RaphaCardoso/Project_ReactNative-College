const Aluno = require("../models/Aluno");

const alunoService = {

    create: async (aluno) => {
        try {
            return await Aluno.create(aluno)
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar aluno');
        }
    },

    update: async (id, alunoToUpdate) => {
        try {

            const valid = await Aluno.findById(id)

            if (valid) {
                return await Aluno.findByIdAndUpdate(id, alunoToUpdate)
            }

            return null;

        } catch (error) {
            throw new Error('Ocorreu um erro ao Atulizar aluno')
        }
    },

    getById: async (id) => {
        try {

            const aluno = await Aluno.findById(id)

            if (!aluno) {
                return null;
            }

            return aluno;

        } catch (error) {
            throw new Error('Ocorreu um erro.') // throw jogar pra cima, de acordo com a camada
        }
    },

    getAll: async () => {
        try {
            return await Aluno.find();
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    },

    delete: async (id) => {
        try {

            const valid = await Aluno.findById(id)

            if (valid) {
                return await Aluno.findOneAndDelete(id);
            }

            return null;

        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o aluno')
        }
    }

}

module.exports = alunoService;