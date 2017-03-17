'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../views/home.html'

    }).state('aboutus', {
        url: '/aboutus',
        templateUrl: '../views/aboutUs.html'

    })

    // .state('ourpromise', {
    //         url: '/ourpromise',
    //         parent: 'aboutus',
    //         templateUrl: "../views/ourpromise.html"
    //     })

    // .state('process', {
    //         url: '/process',
    //         parent: 'aboutus',
    //         templateUrl: "../views/process.html"
    //     })

    // .state('team', {
    //         url: '/team',
    //         parent: 'aboutus',
    //         templateUrl: "../views/team.html"
    //     })

    .state('jointhefight', {
        url: '/jointhefight',
        templateUrl: '../views/joinTheFight.html'

    }).state('ourstories', {
        url: '/ourstories',
        templateUrl: '../views/ourStories.html'

    }).state('partnerships', {
        url: '/partnerships',
        templateUrl: '../views/partnerships.html'

    }).state('eventsmedia', {
        url: '/eventsmedia',
        templateUrl: '../views/eventsMedia.html'

    });
});
'use strict';

angular.module('app').directive('animateDir', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/video.html'
    };
});
'use strict';

angular.module('app').directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/navbar.html'
    };
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {});
'use strict';

angular.module('app').service('mainSrv', function () {});