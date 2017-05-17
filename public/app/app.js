var app = angular.module('ItemApp', ['ui.router', 'ItemCtrls']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/404');
        $httpProvider.interceptors.push('AuthInterceptor');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/items.html',
                controller: 'HomeCtrl'
            })
            .state('newRecipe', {
                url: '/itemss/new',
                templateUrl: 'app/views/newRecipe.html',
                controller: 'NewCtrl'
            })
            .state('itemShow', {
                url: '/items/:id',
                templateUrl: 'app/views/showRecipe.html',
                controller: 'ShowCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/views/userSignup.html',
                controller: 'SignupCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/userLogin.html',
                controller: 'LoginCtrl'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/views/404.html'
            });

        $locationProvider.html5Mode(true);
    }
]);
