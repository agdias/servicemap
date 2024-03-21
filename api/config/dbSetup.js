const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://servicemap:gIpNIzeSrBv2uNr8@cluster0.dnn7z31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI)
        console.log(`Connected to MongoDB instance: ${conn.connection.host}`)
    
    } catch(e) {
        console.log(`Error connecting to MongoDB: ${e}`)
    }
}

module.exports = connectDB;