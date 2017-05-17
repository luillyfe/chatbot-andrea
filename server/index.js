const server = require('express')()
const chat   = require('./chat')

server.use('/chat', chat)

module.exports = server