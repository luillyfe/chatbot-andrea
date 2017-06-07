const ConversationV1 = require('watson-developer-cloud/conversation/v1')
const workspaceId    = '044840a1-0eaa-4288-bfff-89fdeb1ea78c'
let context = {}

const conversation = new ConversationV1({
    username: 'b959b2ad-27c8-4eeb-9d8b-0f50aa0334fd',
    password: 'KJx2HcoF76Cq',
    url: 'https://gateway.watsonplatform.net/conversation/api',
    version_date: '2017-05-26'
})

conversation.message({ workspace_id: workspaceId}, function (err, response) {
    if (err) {
        console.log(err)
    } else {
        context = response.context
    }
})

const assignNewProperty = () => Object.assign({
    'sendMessage': (message = null) => new Promise((resolve, reject) => {
        conversation.message({
            input: {text: message},
            workspace_id: workspaceId,
            context: context
        }, function (err, response) {
            if (err) {
                reject(err)
            } else {
                context = response.context
                resolve(response.output.text)
            }
        })
    })
}, conversation)

module.exports = assignNewProperty()