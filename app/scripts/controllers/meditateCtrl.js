'use strict'

angular.module('theYogiMe')
    .controller('meditateCtrl', function () { // console.log($scope)
        .directive('audio-player', function ($rootScope) {
            return {
                restrict: 'E',
                scope: {},
                controller: function ($scope, $element) {
                    $scope.audio = new Audio();
                    $scope.currentNum = 0;

                    $scope.next = function () {
                        $rootScope.$broadcast('audio.next');
                    };
                    $scope.prev = function () {
                        $rootScope.$broadcast('audio.prev');
                    };

                    $scope.playpause = function () {
                        var a = $scope.audio.paused ? $scope.audio.play() : $scope.audio.pause();
                    };

                    $scope.audio.addEventListener('play', function () {
                        $rootScope.$broadcast('audio.play', this);
                    });
                    $scope.audio.addEventListener('pause', function () {
                        $rootscope.$broadcast('audio.pause', this);
                    });
                    $scope.audio.addEventListener('timeupdate', function () {
                        $rootScope.$broadcast('audio.time', this);
                    });
                    $scope.audio.addEventListener('ended', function () {
                        $rootScope.$broadcast('audio.ended', this);
                        $scope.next();
                    });
                    //set track and play it
                    $rootScope.$on('audio.set', function (r, file, info, currentNum) {
                        var playing = !$scope.audio.paused;
                        $scope.audio.src = file;
                        var a = playing ? $scope.audio.play() : $scope.audio.pause();
                        $scope.info = info;
                        $scope.currentNum = currentNum;
                        $scope.totalNum = totalNum;
                    });
                    setInterval(function () {
                        $scope.$apply();
                    }, 500);
                },
                templateUrl: '/templates/meditate.html'
            };
        });
    });