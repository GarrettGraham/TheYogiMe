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