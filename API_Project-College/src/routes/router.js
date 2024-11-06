const { Router } = require('express');

const router = Router();

const profRoutes = require('./profRoute');

const alunoRoutes = require('./alunoRoute');

router.use('/prof', profRoutes);

router.use('/aluno', alunoRoutes);

module.exports = router;