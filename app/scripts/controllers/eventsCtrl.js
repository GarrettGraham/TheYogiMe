(function(){
'use strict';

angular.module('theYogiMe')
.controller('eventsCtrl', function($http, $firebaseArray){
var self = this;
// communicate with firebase
$http.get('https://theyogime.firebaseio.com/events/.json')
.then(function(response){
  self.event = response.data;
});

var ref = new Firebase('https://theyogime.firebaseio.com/events/yogaEvent');

});

})();
