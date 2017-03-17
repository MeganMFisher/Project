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
           
        })

        .state('jointhefight', {
            url: '/jointhefight',   
            templateUrl: '../views/joinTheFight.html',
           
        })

        .state('ourstories',{
            url: '/ourstories',
            templateUrl: '../views/ourStories.html',
           
        })

        .state('partnerships',{
            url: '/partnerships',
            templateUrl: '../views/partnerships.html',
         
        })

        .state('eventsmedia',{
            url: '/eventsmedia',
            templateUrl: '../views/eventsMedia.html',
         
        })
        
})