const Command = require('../models/taskModel')

// get All Tasks
const getAllTasks = async (req, res) => {
	try {
		const tasks = await Command.find({})
		res.status(200).json({ length: tasks.length, tasks })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

// create new Task
const createNewTask = async (req, res) => {
	try {
		const task = await Command.create(req.body)
		const allTask = await Command.find({})
		res.status(200).json({ allTask })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

// get single Task
const getSingleTask = async (req, res) => {
	try {
		const { id: taskID } = req.params
		const task = await Command.findOne({ _id: taskID })
		if (!task) {
			return res.status(404).json({ msg: `Item with an ID of ${taskID} doesn't exist` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(404).json({ msg: error })
	}
}

// delete Task
const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params
		const task = await Command.findOneAndDelete({ _id: taskID })
		const allTask = await Command.find({})
		if (!task) {
			console.log(`No task found`)
			return res.status(404).json({ msg: `No task found with an ID of ${taskID}` })
		}
		res.status(200).json({ allTask })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

// update Task
const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params
		// const { name } = req.body
		const task = await Command.findOneAndUpdate({ _id: taskID }, req.body, {
			new: true,
			runValidators: true,
		})
		if (!task) {
			return res.status(400).json({ msg: `Cannot find the id` })
		}
		const allTask = await Command.find({})
		return res.status(200).json({ allTask })
	} catch (error) {
		res.status(404).json({ msg: error })
	}
}

module.exports = {
	getAllTasks,
	createNewTask,
	getSingleTask,
	updateTask,
	deleteTask,
}
