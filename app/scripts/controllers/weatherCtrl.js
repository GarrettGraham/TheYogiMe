(function(){
  'use strict';

  angular.module('theYogiMe')
  .factory('yogiWeather', ['$http', '$q', function($http, $q){
    function getWeather (zip){
      var deferred = $q.defer();
      $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
      .success(function(data){
        deferred.resolve(data.query.result.channel);
      })
      .error(function(err){
        console.log('Error retrieving markets');
        deferred.reject(err);
      });
      return deferred.promise;
    }
    return{
      getWeather: getWeather
    };
  }]);

angular.module('theYogiMe')
.controller('weatherCtrl', ['$scope', 'yogiWeather', function($scope, yogiWeather){
  function fetchWeather(zip) {
    yogiWeather.getWeather(zip).then(function(data){
      $scope.place = data;
    });
  }
  fetchWeather('32750');

  $scope.findWeather = function(zip) {
    $scope.place = '';
    fetchWeather(zip);
  };
}]);

})();
