const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController')
// usa el http://localhost:3000.....server.use('/api/v1/tasks')
//obtener todas las tareas
router.get('/', TaskController.getAllTasks)
// agregar una nueva tarea
router.post('/', TaskController.insertTask)
//actualizar una nueva tarea
router.patch('/:id', TaskController.updateTask)
//eliminar una tarea
router.delete('/:id', TaskController.removeTask)
//obtener una tarea
router.get('/:id', TaskController.getOneTask)

// se debe exportar el router
module.exports = router 