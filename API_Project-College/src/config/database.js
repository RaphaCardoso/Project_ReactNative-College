const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {

        const HOST_DB = process.env.HOST_DB;

        const PASS_DB = process.env.DB_PASS;


        const mongoURI = `mongodb+srv://${HOST_DB}:${PASS_DB}@database-college.fep21.mongodb.net/?retryWrites=true&w=majority&appName=Database-College`

        await mongoose.connect(mongoURI);

        console.log("MongoDB conectado!");

    } catch (error) {

        console.error("Erro ao conectar o Mongo: ", error);

        process.exit(1);

    }
};


module.exports = connectDB;