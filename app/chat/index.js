const Chat = ['messages', function (ms) {
    ms
        .getMessages()
        .then(messages => {
            this.andreaMessages = messages.andrea
            this.meMessages = messages.me
        })
}]

angular
    .module('chatbot-andrea')
    .controller('chat', Chat)