
const Chat = function ($scope) {
    this.$onInit = () => {
        console.log('Am i still working ?')
    }
}

angular
    .module('chatbot-andrea')
    .component('chat', {
        bindings: {},
        controller: Chat,
        templateUrl: 'chat/user-input.html'
    })