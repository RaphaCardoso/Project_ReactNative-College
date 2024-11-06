const profService = require("../services/profService")

const profController = {
    create: async (req, res) => {
        try {
            const prof = await profService.create(req.body);
            return res.status(201).json({
                msg: 'Usuário criado com sucesso',
                prof
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o usuário'
            })
        }
    },

    update: async (req, res) => {
        try {

            const prof = await profService.update(req.params.id, req.body);

            if (!prof) {
                return res.status(400).json({
                    msg: 'prof não encontrado'
                })
            }

            return res.status(200).json({
                msg: 'prof atualizado com sucesso', prof
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

            const prof = await profService.delete(id);

            if (!prof) {
                return res.status(400).json({
                    msg: "Usuario não encontrado"
                })
            }

            return res.status(200).json({
                msg: "Usuario deletado com sucesso",
                prof
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao deletar os profs"
            })
        }
    },

    getAll: async (req, res) => {
        try {
            const profs = await profService.getAll();

            return res.status(200).json({
                msg: "Usuarios cadastrados: ",
                profs
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar os profs"
            })
        }
    },

    getOne: async (req, res) => {
        try {

            const { id } = req.params;

            const prof = await profService.getById(id);

            if (!prof) {
                return res.status(400).json({
                    msg: "prof não encontrado"
                })
            }

            return res.status(200).json({
                msg: "prof: ",
                prof
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar o prof"
            })
        }
    }

}

module.exports = profController;