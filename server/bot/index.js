const router = require('express').Router()
const conversation = require('./conversation')


router.post('/', (req, res) => {
    conversation.sendMessage(req.body.userInput)
        .then((andreaMessage) => {
            res.send(andreaMessage)
        })
        .catch((error) => console.log(error))
})

const  assignNewProperty = () => Object.assign({
    sendMessage: (msg) => {
        return conversation.sendMessage(msg)
        // .then(andreaMessage => andreaMessage)
            .catch((error) => console.log(error))
    }
}, router)

module.exports = assignNewProperty()