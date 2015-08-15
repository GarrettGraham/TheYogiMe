(function() {
'use strict';

angular.module('theYogiMe')
	.controller('posesCtrl', function($http, $firebaseArray){
	var self = this;
// persist/save data to firebase using angularfire
var ref = new Firebase('http://oc-run.firebaseio.com/poses/' + 'comments');
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
