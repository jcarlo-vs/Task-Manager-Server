const express = require('express')
const { getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask } = require('../controllers/taskCotrollers')

const router = express.Router()

//get all tasks
router.get('/', getAllTasks)

// create new task
router.post('/', createNewTask)

// get single task
router.get('/:id', getSingleTask)

// update task
router.patch('/:id', updateTask)

//  delete task
router.delete('/:id', deleteTask)

module.exports = router
