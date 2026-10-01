const express = require('express');
const router = express.Router();
const competicaoController = require('../controllers/competicaoController');

// Rotas para Competição
router.get('/competicoes', competicaoController.getCompeticoes);
router.get('/competicoes/:id', competicaoController.getCompeticaoById);
router.post('/competicoes', competicaoController.createCompeticao);
router.put('/competicoes/:id', competicaoController.updateCompeticao);
router.delete('/competicoes/:id', competicaoController.deleteCompeticao);

module.exports = router;
