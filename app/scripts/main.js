/* jshint devel:true */
//console.log('\'Allo \'Allo!');

var app = angular.module('theYogiMe', [
    'ui.router'
])
app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'main.html',
        controller: 'mainCtrl as main'
      })
      .state('yoga', {
        url:'/yoga',
        templateUrl: 'yoga.html',
        controller: 'mainCtrl as main'
      })
      .state('poses', {
        url:'/poses',
        templateUrl: 'poses.html',
        controller: 'mainCtrl as main'
    })
      .state('meditate', {
        url:'/meditate',
        templateUrl: 'meditate.html',
        controller: 'mainCtrl as main'
      })

}])



