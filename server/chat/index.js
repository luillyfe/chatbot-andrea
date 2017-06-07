const router   = require('express').Router()
const conversation = require('../bot/index')
const fs       = require('fs')
const DATA_DIR = `${__dirname}`

router.get('/*.json', (req, res) =>
    res.sendFile(`${DATA_DIR}/${req.url}`)
)

router.post('/message', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    conversation.sendMessage(req.body.msg)
        .then((msg) => res.send({andreaMsg: msg[0]}))
        .catch(console.log)
})

module.exports = router