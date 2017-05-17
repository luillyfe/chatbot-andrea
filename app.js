const express    = require('express')
const bodyParser = require('body-parser')
const logger     = require('morgan')
const app        = express()
const server     = require('./server')

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/app/`))
app.use('/api', server)

module.exports = app