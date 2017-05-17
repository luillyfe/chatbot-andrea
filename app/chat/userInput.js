
const UserInput = function () {
    this.$onInit = () => {
        console.log('Am i still working ?')
    }
}

angular
    .module('chatbot-andrea')
    .component('userInput', {
        bindings: {},
        controller: UserInput,
        templateUrl: 'chat/user-input.html'
    })