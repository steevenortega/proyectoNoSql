const express = require('express');
const router = express.Router();

const CreateuserController = require('../controllers/CreateuserController')
// usa el http://localhost:3000.....server.use('/api/v1/tasks')
//obtener todas las tareas

// agregar una nueva tarea
router.post('/', CreateuserController.insertCreateuser)
//actualizar una nueva tarea


// se debe exportar el router
module.exports = router 