// Server
const express = require('express')
const app = express()
app.use(express.json())
// Use Static Files Like Images 
app.use('/uploads', express.static(__dirname + '/uploads'))
// cookie parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())
// CORS
const cors = require('cors')
app.use(cors({ credentials: true, origin: ['http://localhost:3000',] }))
// Body Parser
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
// USE Routes
const router = require('./Routes/Routes')
app.use(router)
// TO USE ENV VARIABLES 
require('dotenv').config()
// Connect To Mongo Db
const mongoose = require('mongoose')
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to mongo');
    } catch (error) {
        throw new Error("can't connect to mongo check your connection")
    }
}
connect()
// Running Server
app.listen(5000, console.log('port 5000'))