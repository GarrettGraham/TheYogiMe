/* jshint devel:true */
//console.log('\'Allo \'Allo!');

angular.module('theYogiMe', [
    'ui.router'
])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'main.html',
//        controller: 'MainCtrl'
      })
      .state('yoga', {
        url:'/yoga',
        templateUrl: 'yoga.html'
      })
      .state('poses', {
        url:'/poses',
        templateUrl: 'poses.html'
    })
      .state('meditate', {
        url:'/meditate',
        templateUrl: 'meditate.html'
      })

}])



