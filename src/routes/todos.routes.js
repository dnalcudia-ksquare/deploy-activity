const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();
const todosController = require('../controllers/todos.controller');

router.get('/todos', todosController.getAllTODO);
router.post('/todos', upload.none(), todosController.newTODO);
router.get('/todos/:id', todosController.getOneTODO);
router.put('/todos/:id', upload.none(), todosController.updateTODO);
router.delete('/todos/:id', todosController.deleteOneTODO);

module.exports = router;
