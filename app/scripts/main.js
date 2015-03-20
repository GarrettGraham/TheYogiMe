/* jshint devel:true */
//console.log('\'Allo \'Allo!');
'use strict'

var app = angular.module('theYogiMe', [
    'ui.router',
    'uiGmapgoogle-maps'
])
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/main.html',
            controller: 'mainCtrl as main'
        })
        .state('yoga', {
            url: '/yoga',
            templateUrl: 'templates/yoga.html',
            controller: 'yogaCtrl as yoga'
        })
        .state('poses', {
            url: '/poses',
            templateUrl: 'templates/poses.html',
            controller: 'posesCtrl as poses'
        })
        .state('meditate', {
            url: '/meditate',
            templateUrl: 'templates/meditate.html',
            controller: 'meditateCtrl as meditate'
        })
        .state('studioMap', {
            url: '/studioMap',
            templateUrl: 'templates/studioMap.html',
            controller: 'mapCtrl as studioMap'
        });
}]);