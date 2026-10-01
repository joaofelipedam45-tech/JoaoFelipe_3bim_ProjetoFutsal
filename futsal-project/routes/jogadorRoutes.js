const express = require('express');
const router = express.Router();
const jogadorController = require('../controllers/jogadorController');

// Rotas para Jogador
router.get('/jogadores', jogadorController.getJogadores);
router.get('/jogadores/:id', jogadorController.getJogadorById);
router.get('/times/:id_time/jogadores', jogadorController.getJogadoresByTime);
router.post('/jogadores', jogadorController.createJogador);
router.put('/jogadores/:id', jogadorController.updateJogador);
router.delete('/jogadores/:id', jogadorController.deleteJogador);

module.exports = router;
