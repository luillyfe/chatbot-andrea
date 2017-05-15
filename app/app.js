angular.module('chatbot-andrea', ['ngMaterial', 'ngMessages', 'ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/home')

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'chat/index.html'
            })
            .state('index', {
                url: '/index',
                templateUrl: 'auth/index.html'
            })
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('yellow', {
                'default': '600',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
            })
    });