const Chat = ['messages', function (ms) {
    this.$onInit = () => {
        ms
            .getMessages()
            .then(messages => {
                this.messages = messages
            })
    }
    this.sendMessage = (userInput) => ms.sendMessage(userInput)
}]

angular
    .module('chatbot-andrea')
    .controller('chat', Chat)