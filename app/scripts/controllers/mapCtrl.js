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
            id: 1,
            latitude: 28.757783,
            longitude: -81.369105
                }];
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