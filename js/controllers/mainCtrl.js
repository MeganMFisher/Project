angular.module('app').controller('mainCtrl', function($scope, mainSrv){
   
    $scope.showVideo = false;

    $scope.toggleVideo = function(){
    }

    $(document).ready(function(){
    $('#worldImageFadeIn').css('opacity', 0);

    $('#blackButtonFadeIn').waypoint(function() {
            $('#blackButtonFadeIn').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

    $('#blackButtonFadeInRight').waypoint(function() {
            $('#blackButtonFadeInRight').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

    $('#worldImageFadeIn').waypoint(function() {
            $('#worldImageFadeIn').addClass('animated fadeInUp');
        }, {
            offset: '60%'
        });

    })
    

})