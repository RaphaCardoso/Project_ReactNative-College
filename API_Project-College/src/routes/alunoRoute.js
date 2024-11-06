const { Router } = require('express');


const alunoController = require('../controller/alunoController');

const router = Router();

router.post('/', alunoController.create);

router.get('/:id', alunoController.getOne);

router.get('/', alunoController.getAll);

router.put('/:id', alunoController.update);

router.delete('/:id', alunoController.delete);

module.exports = router;