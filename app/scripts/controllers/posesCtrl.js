(function() {
'use strict';

angular.module('theYogiMe')
	.controller('posesCtrl', function($http, $firebaseArray){
	var self = this;
	//save data to firebase using angularfire
$http.get('https://theyogime.firebaseio.com/poses/.json')
.then(function(response){
	self.comment = response.data;
	console.log(response.data);
});

// persist data below the form
var ref = new Firebase('http://theyogime.firebaseio.com/poses/comments');
// ng model comment info to populate below the form
	self.comments = $firebaseArray(ref);

	self.addComment = function(){
		self.comments.$add ({
			name: self.newCommentName,
			text: self.newCommentText
		});
		self.newCommentName = '';
		self.newCommentText = '';
	};

	});
})();
