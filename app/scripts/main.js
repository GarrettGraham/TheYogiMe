/* jshint devel:true */
(function(){

'use strict';

var app = angular.module('theYogiMe', [
    'ui.router', 'ngAudio', 'firebase'
]);

//must put the urlRouterProvider and stateProvider as parameters as well as within the function arguments so that the build and firebase deploy works correctly
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/main.html',
			controller: 'mainCtrl',
			controllerAs: 'main'
		})
		.state('yoga', {
			url: '/yoga',
			templateUrl: '/yoga.html',
			controller: 'yogaCtrl',
			controllerAs: 'yoga'
		})

		.state('poses', {
			url: '/poses',
			templateUrl: '/poses.html',
			controller: 'posesCtrl',
			controllerAs: 'poses'
		})
		// below is the route to the yoga videos
		.state('poses.chairYoga', {
			url: '/chairYoga',
			templateUrl: '/chairYoga.html'
		})
		.state('poses.downDog', {
			url: '/downDog',
			templateUrl: '/downDog.html'
		})
		.state('poses.warriorII', {
			url: '/warriorII',
			templateUrl: '/warriorII.html'
		})
		//meditation page with audio
		.state('meditate', {
			url: '/meditate',
			templateUrl: '/meditate.html',
			controller: 'meditateCtrl',
			controllerAs: 'meditate'
		})
		//schedule a private lesson through email form
		.state('scheduleLesson', {
			url: '/scheduleLesson',
			templateUrl: '/scheduleLesson.html',
			controller: 'lessonCtrl',
			controllerAs: 'scheduleLesson'
		});

}]);
})();
