const server = require('express')()
const chat   = require('./chat')
const bot    = require('./bot')

server.use('/chat', chat)
// server.use('/bot', bot)

module.exports = server