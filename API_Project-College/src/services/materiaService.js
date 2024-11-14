const Materia = require('../models/Materias');

const profService = require("../services/profService");

const materiaService = {

    create: async (materia) => {
        try {
            return await Materia.create(materia)
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar materia');
        }
    },

    update: async (id, materiaToUpdate) => {
        try {

            console.log(materiaToUpdate);


            const valid = await Materia.findById(id);

            const existeProf = await profService.getById(materiaToUpdate.profID);

            console.log(existeProf);


            if (!existeProf) {
                return {
                    error: true,
                    msg: "Matrícula de Professor inválida"
                }
            }

            if (valid) {
                return await Materia.findByIdAndUpdate(id, materiaToUpdate)
            }

            return null;

        } catch (error) {
            throw new Error('Ocorreu um erro ao Atulizar materia')
        }
    },

    getById: async (id) => {
        try {

            const materia = await Materia.findById(id)

            if (!materia) {
                return null;
            }

            return materia;

        } catch (error) {
            throw new Error('Ocorreu um erro.') // throw jogar pra cima, de acordo com a camada
        }
    },

    getAll: async () => {
        try {
            return await Materia.find();
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    },

    delete: async (id) => {
        try {

            const valid = await Materia.findById(id)

            if (valid) {
                return await Materia.findOneAndDelete(id);
            }

            return null;

        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o materia')
        }
    }

};


module.exports = materiaService;