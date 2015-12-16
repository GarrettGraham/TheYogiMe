(function(){
  'use strict';

  angular.module('theYogiMe')
  .factory('yogiWeather', ['$http', '$q', function($http, $q){
    // var apiKey = '31bd9688a15a6e5353428ad1923d0f3a';
      // cachedForecast; //cache data from server request in order to store weather data from each query

    function getWeather (zip){
      var deferred = $q.defer();
      console.log(deferred);
      // lat = '28.538335',
      // lon = '-81.379236';
      $http({
        method: 'GET',
        url:'././forecast.json'
      }).success(function(data){
        console.log(data);
        deferred.resolve(data.query);
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

  // $scope.findWeather = function(zip) {
  //   $scope.place = '';
  //   fetchWeather(zip);
  // };
}]);
// want to create a script that changes the background image of the page depending on the weather of the day. if it is sunny, display a animated background of a sunny day at the park. if it is cloudy display an appropriate animated image, if it is rainy/ stormy display an appropriate image, and if it is dusk show an appropriate image and if it is evening, show an appropriate image.
})();
