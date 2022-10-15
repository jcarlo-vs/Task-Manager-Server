const express = require('express')
const taskRouter = require('./routes/taskRouter')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
const cors = require('cors')
// ------------- Imports -------------

dotenv.config()
const app = express()
app.use(cors())

app.use(express.json())
app.use('/api/v1/tasks', taskRouter)

const PORT = 3000
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(PORT, console.log(`Server is listening to port ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}
start()
