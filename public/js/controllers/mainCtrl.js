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

     $('#joinFightFadeIn').waypoint(function() {
            $('#joinFightFadeIn').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

     $('#joinFightFadeIn1').waypoint(function() {
            $('#joinFightFadeIn2').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

     $('#joinFightFadeIn2').waypoint(function() {
            $('#joinFightFadeIn1').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

     $('#joinFightFadeIn3').waypoint(function() {
            $('#joinFightFadeIn3').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

    $('#joinFightFadeIn4').waypoint(function() {
            $('#joinFightFadeIn4').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

    $('#joinFightFadeIn5').waypoint(function() {
            $('#joinFightFadeIn5').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

    $('#joinFightFadeIn6').waypoint(function() {
            $('#joinFightFadeIn6').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

    $('#joinFightFadeIn7').waypoint(function() {
            $('#joinFightFadeIn7').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

     $('#promiseFade').waypoint(function() {
            $('#promiseFade').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

    $('#promiseFade1').waypoint(function() {
            $('#promiseFade1').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

    $('#promiseFade2').waypoint(function() {
            $('#promiseFade2').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

    $('#partnerFadeIn').waypoint(function() {
            $('#partnerFadeIn').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

     $('#partnerFadeIn1').waypoint(function() {
            $('#partnerFadeIn1').addClass('animated fadeInRightBig');
        }, {
            offset: '100%'
        });

     $('#partnerFadeIn2').waypoint(function() {
            $('#partnerFadeIn2').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

     $('#partnerFadeIn3').waypoint(function() {
            $('#partnerFadeIn3').addClass('animated fadeInLeftBig');
        }, {
            offset: '100%'
        });

    })


    

})