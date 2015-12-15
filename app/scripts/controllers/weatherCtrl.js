(function(){
  'use strict';

  angular.module('theYogiMe')
  .factory('yogiWeather', ['$http', '$q', function($http, $q){
    var apiKey = '96e767315d45d96b025baf3e22eced01',
    lat = '28.538335',
    lon = '-81.379236',
    cachedForecast; //cache data from server request in order to store weather data from each query

    function getWeather (zip){
      var deferred = $q.defer(),
      zip = lat + ',' + lon;
      $http.get('https://api.forecast.io/forecast/' + apiKey + '/' + zip + '/?callback=JSON_CALLBACK' )
      .success(function(data){
        deferred.resolve(data.query.results.channel);
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
// want to create a script that changes the background image of the page depending on the weather of the day. if it is sunny, display a animated background of a sunny day at the park. if it is cloudy display an appropriate animated image, if it is rainy/ stormy display an appropriate image, and if it is dusk show an appropriate image and if it is evening, show an appropriate image.
})();
