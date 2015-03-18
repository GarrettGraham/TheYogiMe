'use strict'

angular.module('theYogiMe')
.controller('mapCtrl', function($scope) {
    $scope.map = { center: { latitude: 28, longitude: -81 }, zoom:8 };
});