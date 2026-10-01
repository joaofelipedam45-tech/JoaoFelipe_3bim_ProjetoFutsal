const express = require('express');
const router = express.Router();
const timeController = require('../controllers/timeController');

// Rotas para Time
router.get('/times', timeController.getTimes);
router.get('/times/:id', timeController.getTimeById);
router.post('/times', timeController.createTime);
router.put('/times/:id', timeController.updateTime);
router.delete('/times/:id', timeController.deleteTime);

module.exports = router;
