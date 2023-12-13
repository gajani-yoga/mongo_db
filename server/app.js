const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger('dev'))


//Connect to db
mongoose.connect(process.env.MONG_URI)  //asynchronous code --> returns a promise
    .then(() => {})
    .catch((error) => {
        console.log(error)
    })