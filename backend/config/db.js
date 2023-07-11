const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`Connected: ${connect.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports = connectDB;