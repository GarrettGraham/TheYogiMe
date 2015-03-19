'use strict'

angular.module('theYogiMe')
    .controller('mapCtrl', function mapCtrl($scope) {
        $scope.map = {
            center: {
                latitude: 28.6626364,
                longitude: -81.3766657
            },
            zoom: 11
        };
        $scope.studioMarkers = [{
                // body coach 
                id: 1,
                latitude: 28.757783,
                longitude: -81.369105
        },
            { //serenity now yoga
                id: 2,
                latitude: 28.6981543,
                longitude: -81.3753033
                },
            { //altamonte springs yoga
                id: 3,
                latitude: 28.6957451,
                longitude: -81.3890362
                },
            { // zenality yoga studio
                id: 4,
                latitude: 28.6726664,
                longitude: -81.4198279
            },
            ];
    });


//angular.module('theYogiMe')
//    .controller('mapCtrl', function () {
//            mapCtrl($scope) {
//                $scope.map = {
//                    center: {
//                        latitude: 28,
//                        longitude: -81
//                    },
//                    zoom: 8
//                };
//            };
//        });

//            mapCtrl ($scope) {
//    $scope.map = { center: { latitude: 28, longitude: -81 }, zoom:8 };
//});