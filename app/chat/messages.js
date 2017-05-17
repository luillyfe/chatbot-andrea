const Messages = ['$http', function ($http) {
    let messages;

    const getMessages = () => {
        return $http({
                method: 'GET',
                url: '/api/chat/messages.json'
            }).then(res => res.data)
    }

    return {
        getMessages: getMessages
    }
}]


angular
    .module('chatbot-andrea')
    .factory('messages', Messages)
