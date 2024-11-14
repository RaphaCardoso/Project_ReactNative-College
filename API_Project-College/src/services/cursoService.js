const Curso = require("../models/Curso");

const Aluno = require("../models/Aluno");

const Materia = require("../models/Materias")

const materiaService = require("../services/materiaService");

const cursoService = {

    create: async (matricula) => {
        try {

            const isValidMateria = await materiaService.getById(matricula.materiaId);

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

            const cursos = await cursoService.getAll();

            // filtrando todos os alunos desse curso
            const cursosFiltrados = cursos.filter(curso => curso.materiaId === id)

            const alunoIds = cursosFiltrados.map(curso => curso.alunoId);

            let alunos = [];

            for (i = 0; i < alunoIds.length; i++) {

                const ids = alunoIds[i]

                const aluno = await Aluno.findById(ids)

                alunos.push(aluno);
            }
            const materia = await Materia.findById(id);

            const data = {
                Curso: materia,
                Alunos: alunos
            }

            return data;

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