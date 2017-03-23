'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'mainCtrl'
    }).state('aboutus', {
        url: '/aboutus',
        templateUrl: '../views/aboutUs.html'

    }).state('jointhefight', {
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

angular.module('app').service('mainSrv', function () {});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSrv) {

    $scope.showVideo = false;

    $scope.toggleVideo = function () {};

    $(document).ready(function () {
        $('#worldImageFadeIn').css('opacity', 0);

        $('#blackButtonFadeIn').waypoint(function () {
            $('#blackButtonFadeIn').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

        $('#blackButtonFadeInRight').waypoint(function () {
            $('#blackButtonFadeInRight').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

        $('#worldImageFadeIn').waypoint(function () {
            $('#worldImageFadeIn').addClass('animated fadeInUp');
        }, {
            offset: '60%'
        });
    });
});