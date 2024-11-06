const Prof = require("../models/Prof");

const profService = {

    create: async (prof) => {
        try {
            return await Prof.create(prof)
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar prof');
        }
    },

    update: async (id, profToUpdate) => {
        try {

            const valid = await Prof.findById(id)

            if (valid) {
                return await Prof.findByIdAndUpdate(id, profToUpdate)
            }

            return null;

        } catch (error) {
            throw new Error('Ocorreu um erro ao Atulizar prof')
        }
    },

    getById: async (id) => {
        try {

            const prof = await Prof.findById(id)

            if (!prof) {
                return null;
            }

            return prof;

        } catch (error) {
            throw new Error('Ocorreu um erro.') // throw jogar pra cima, de acordo com a camada
        }
    },

    getAll: async () => {
        try {
            return await Prof.find();
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    },

    delete: async (id) => {
        try {

            const valid = await Prof.findById(id)

            if (valid) {
                return await Prof.findOneAndDelete(id);
            }

            return null;

        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o prof')
        }
    }

}

module.exports = profService;