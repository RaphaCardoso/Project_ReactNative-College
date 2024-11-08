const alunoService = require("../services/alunoService")

const alunoController = {
    create: async (req, res) => {
        try {
            const aluno = await alunoService.create(req.body);
            return res.status(201).json({
                msg: 'Usuário criado com sucesso',
                aluno
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o usuário'
            })
        }
    },

    update: async (req, res) => {
        try {

            const aluno = await alunoService.update(req.params.id, req.body);

            if (!aluno) {
                return res.status(400).json({
                    msg: 'aluno não encontrado'
                })
            }

            return res.status(200).json({
                msg: 'aluno atualizado com sucesso',
            });

        } catch (error) {
            return res.status(500).json({
                msg: ' Erro ao tentar atualizar o usuário'
            })
        }
    },

    delete: async (req, res) => {
        try {

            const { id } = req.params;

            const aluno = await alunoService.delete(id);

            if (!aluno) {
                return res.status(400).json({
                    msg: "Usuario não encontrado"
                })
            }

            return res.status(200).json({
                msg: "Usuario deletado com sucesso",
                aluno
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao deletar os alunos"
            })
        }
    },

    getAll: async (req, res) => {
        try {
            const alunos = await alunoService.getAll();

            return res.status(200).json({
                msg: "Usuarios cadastrados: ",
                alunos
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar os alunos"
            })
        }
    },

    getOne: async (req, res) => {
        try {

            const { id } = req.params;

            const aluno = await alunoService.getById(id);

            if (!aluno) {
                return res.status(400).json({
                    msg: "aluno não encontrado"
                })
            }

            return res.status(200).json({
                msg: "aluno: ",
                aluno
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar o aluno"
            })
        }
    }

}

module.exports = alunoController;