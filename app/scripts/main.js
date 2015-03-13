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
        templateUrl: 'main.html'
      })
      .state('yoga', {
        url:'/yoga',
        templateUrl: 'app/yoga.html'
      })
      .state('meditate', {
        url:'/meditate',
        templateUrl: 'app/meditate.html'
      })

}])