const express = require('express');
const router = express.Router();
const tecnicoController = require('../controllers/tecnicoController');

// Rotas para Técnico
router.get('/tecnicos', tecnicoController.getTecnicos);
router.get('/tecnicos/:id', tecnicoController.getTecnicoById);
router.post('/tecnicos', tecnicoController.createTecnico);
router.put('/tecnicos/:id', tecnicoController.updateTecnico);
router.delete('/tecnicos/:id', tecnicoController.deleteTecnico);

module.exports = router;
