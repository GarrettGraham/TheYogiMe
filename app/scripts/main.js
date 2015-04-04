/* jshint devel:true */

'use strict'

var app = angular.module('theYogiMe', [
    'ui.router',
    'uiGmapgoogle-maps',
    'firebase'
])

.constant('FIREBASE_URL', 'https://theyogime.firebaseio.com/')

app.config(function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/main.html',
			controller: 'mainCtrl',
			controllerAs: 'main'
		})
		.state('yoga', {
			url: '/yoga',
			templateUrl: 'templates/yoga.html',
			controller: 'yogaCtrl',
			controllerAs: 'yoga'
		})
		.state('poses', {
			url: '/poses',
			templateUrl: 'templates/poses.html',
			controller: 'posesCtrl',
			controllerAs: 'poses'
		})
		// below is the route to the chair yoga video
		.state('poses.chairYoga', {
			url: '/chairYoga',
			templateUrl: 'templates/tabs/chairYoga.html'
		})
		.state('poses.downDog', {
			url: '/downDog',
			templateUrl: 'templates/tabs/downDog.html'
		})
		.state('poses.warriorII', {
			url: '/warriorII',
			templateUrl: 'templates/tabs/warriorII.html'
		})
		.state('meditate', {
			url: '/meditate',
			templateUrl: 'templates/meditate.html',
			controller: 'meditateCtrl',
			controllerAs: 'meditate'
		})
		.state('studioMap', {
			url: '/studioMap',
			templateUrl: 'templates/studioMap.html',
			controller: 'mapCtrl',
			controllerAs: 'studioMap'
		})

//	.factory('SendEmail', function ($http) {
			//		var self = this;
			//		var currentdate = new Date();
			//		var time = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + " at " + currentDate.getHours() + ":" + currentDate.getMinutes();
			//
			//		return {
			//
			//			sentEmail: function () {
			//				$http({
			//					method: "POST",
			//					url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
			//					data: {
			//						'key': 'a2o-Xz8u1Lrb75Z2NlscsQ',
			//						"template_name": "theyogime",
			//						"template_content": [
			//							{
			//								"name": "example name",
			//								"content": "example content"
			//							}
			//						],
			//						'message': {
			//							'from_email': 'ganderson7197@icloud.com',
			//							'from_name': 'TheYogiMe',
			//							'headers': {
			//								'Reply-To': 'ganderson7197@icloud.com'
			//							},
			//
			//							'subject': 'Lead for Private Lesson',
			//							'to': [
			//								{
			//									'email': this.getEmail,
			//									'name': 'name',
			//									'type': 'to'
			//									}],
			//						}
			//					}
			//				})
			//			}
			//		}
			//	});

});