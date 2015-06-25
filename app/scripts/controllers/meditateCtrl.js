'use strict';

angular.module('theYogiMe')
	.controller('meditateCtrl', function ($scope,ngAudio) {
	$scope.sound = ngAudio.load("../audio/anyOtherName.mp3");
});