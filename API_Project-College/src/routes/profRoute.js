const { Router } = require('express');


const profController = require('../controller/profController');

const router = Router();

router.post('/', profController.create);

router.get('/:id', profController.getOne);

router.get('/', profController.getAll);

router.put('/:id', profController.update);

router.delete('/:id', profController.delete);

module.exports = router;