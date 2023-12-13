const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

//Routes --> will refactor later
app.get('/articles', (req, res) => {
    res.json({mssg: 'GET all artiles'})
})

app.get('/articles/:id', (req, res) => {
    res.json({mssg: 'GET a single article'})
})

app.post('/articles', (req, res) => {
    res.json({mssg: 'POST a new article'})
})

app.delete('/articles/:id', (req, res) => {
    res.json({mssg: 'DELETE a article'})
})

app.patch('/articles/:id', (req, res) => {
    res.json({mssg: 'UPDATE a single article'})
})