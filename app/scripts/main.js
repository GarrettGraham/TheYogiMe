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
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl as main'
      })
      .state('yoga', {
        url:'/yoga',
        templateUrl: 'templates/yoga.html',
        controller: 'mainCtrl as main'
      })
      .state('poses', {
        url:'/poses',
        templateUrl: 'templates/poses.html',
        controller: 'mainCtrl as main'
    })
      .state('meditate', {
        url:'/meditate',
        templateUrl: 'templates/meditate.html',
        controller: 'meditateCtrl as meditate'
      })

}])



