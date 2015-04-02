/* jshint devel:true */

'use strict'

var app = angular.module('theYogiMe', [
    'ui.router',
    'uiGmapgoogle-maps',
    'firebase'
])
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
        });
})