require('dotenv').config()
const mongoose = require('mongoose')


const app = require('./app')
const port = process.env.PORT


//Connect to db
mongoose.connect(process.env.MONG_URI)  //asynchronous code --> returns a promise
.then(() => {
  app.listen(port, () => {
    console.log(`API running on port ${port}`)
  })  
    })
    .catch((error) => {
        console.log(error)
    })