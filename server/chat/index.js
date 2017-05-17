const router   = require('express').Router()
const fs       = require('fs')
const DATA_DIR = `${__dirname}`

router.get('/*.json', (req, res) => {
    res.sendFile(`${DATA_DIR}/${req.url}`)
})

module.exports = router