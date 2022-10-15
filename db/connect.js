const mongoose = require('mongoose')

// const connectionString =
// 	'mongodb+srv://testing:12345@cluster0.eqvdgcg.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
	return mongoose
		.connect(url)
		.then(() => console.log('CONNECTED to the DB....'))
		.catch((err) => console.log(err))
}

module.exports = connectDB
