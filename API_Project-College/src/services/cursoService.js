const Curso = require("../models/Curso");

const Aluno = require("../models/Aluno");

const Materia = require('../models/Materias');

const cursoService = {

    create: async (matricula) => {
        try {

            const isValidMateria = await Materia.findOne(
                { materiaId: matricula.materiaId }
            )

            if (!isValidMateria) {
                return {
                    error: true,
                    msg: "Matéria inexistente!"
                }
            }

            const isValidAluno = await Aluno.findOne(
                { alunoId: matricula.alunoId }
            )

            if (isValidAluno) {
                return {
                    error: true,
                    msg: "Aluno inexistente!"
                }
            }

            return await Curso.create(matricula);

        } catch (error) {
            throw new Error('Ocorreu um erro ao se matricular')
        }
    },

    getAll: async () => {
        try {
            return await Curso.find();
        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    },

    getAllWhere: async (id) => {
        try {
            return await Curso.findOne({
                matriculaId: id
            });

        } catch (error) {
            throw new Error('Ocorreu um erro.')
        }
    },

    delete: async (id) => {
        try {
            const valid = await Curso.findById(id)

            if (valid) {
                return await Curso.findOneAndDelete(id);
            }

            return null;

        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o prof')
        }
    }


};

module.exports = cursoService