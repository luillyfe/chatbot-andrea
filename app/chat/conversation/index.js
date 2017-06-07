const Conversation = ['$rootScope', '$scope', function ($rootScope, $scope) {
    this.$onInit = () => {
        $rootScope.$on("msg-received", (evt, msg) => {
            this.andreaMessages.push({
                message: msg,
                timestamp: Date.now()
            })
        })

        $rootScope.$on("msg-sent", (evt, msg) => {
            this.meMessages.push({
                message: msg,
                timestamp: Date.now()
            })
        })

        this.andreaMessages = this.messages.andrea
        this.meMessages = this.messages.me
    }
}]

angular
    .module('chatbot-andrea')
    .component('conversation', {
        bindings: {
            messages: '<'
        },
        controller: Conversation,
        controllerAs: 'cv',
        templateUrl: 'chat/conversation/index.html'
    })