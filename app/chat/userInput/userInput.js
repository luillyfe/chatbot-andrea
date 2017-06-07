
const UserInput = ['$rootScope', function ($rootScope) {
    this._clear = () => ''

    this.checkAndSend = () => {
        this.sendMessage({'userInput': this.input})
            .then((msg) => {
                $rootScope.$emit("msg-received", msg)
            })
        $rootScope.$emit("msg-sent", this.input)
        this.input = this._clear()
    }
}]

angular
    .module('chatbot-andrea')
    .component('userInput', {
        bindings: {
            sendMessage: '&'
        },
        controller: UserInput,
        controllerAs: 'userInput',
        templateUrl: 'chat/userInput/user-input.html'
    })