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
// model the form data with firebase
  self.yogaEvent = $firebaseArray(ref);

  self.addYogaEvent = function(){
    self.events.$add ({
        name: self.newYogaEvent,
        location: self.newYogaLocation,
        date: self.newYogaDate,
        time: self.newYogaTime,
        contact: self.newYogaContact,
        info: self.moreInfo
    });

    self.newYogaEvent = '';
    self.newYogaLocation = '';
    self.newYogaDate = '';
    self.newYogaTime = '';
    self.newYogaContact = '';
    self.moreInfo = '';
  };

});

})();
