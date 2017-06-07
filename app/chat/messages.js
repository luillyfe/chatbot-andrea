const Messages = ['$http', function ($http) {
    let messages;

    const getMessages = () => {
        return $http({
                method: 'GET',
                url: '/api/chat/messages.json'
            }).then(res => res.data)
    }

    const sendMessage = (data) => {
        return $http({
            method: 'POST',
            url: '/api/chat/message',
            data: { msg: data },
            headers: {'content-Type': 'application/json;charset=utf-8'}
        }).then((res) => res.data.andreaMsg)
    }

    return {
        getMessages: getMessages,
        sendMessage: sendMessage
    }
}]


angular
    .module('chatbot-andrea')
    .factory('messages', Messages)
