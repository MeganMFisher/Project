angular.module('app', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'mainCtrl'
        })

        .state('aboutus',{
            url: '/aboutus',
            templateUrl: '../views/aboutUs.html',
            controller: 'mainCtrl'
        })

        .state('jointhefight', {
            url: '/jointhefight',   
            templateUrl: '../views/joinTheFight.html',
            controller: 'mainCtrl'
        })

        .state('ourstories',{
            url: '/ourstories',
            templateUrl: '../views/ourStories.html',
            controller: 'mainCtrl'
        })

        .state('partnerships',{
            url: '/partnerships',
            templateUrl: '../views/partnerships.html',
            controller: 'mainCtrl'
        })

        .state('eventsmedia',{
            url: '/eventsmedia',
            templateUrl: '../views/eventsMedia.html',
            controller: 'mainCtrl'
        })
        
})