'use strict'
angular.module('theYogiMe')
	.controller('mapCtrl', function () {});
//angular.module('theYogiMe')
//	.controller('mapCtrl', function (SendEmail, $firebaseObject, $http) {
//		var self = this;
//		this.sentEmail = sendEmail.sentEmail;
//
//		var requestLesson = new Firebase('https://theyogime.firebaseio.com/Lesson/');
//		console.log(requestLesson);
//
//		this.lessonObj = $firebaseObject(requestLesson);
//
//
//		this.visitObj.$loaded().then(function (data) {
//			console.log(data.email);
//			return self.getEmail = data.email;
//		})
//
//		console.log(self.getEmail);
//
//		console.log(this.sendEmail);
//
//		var currentDate = new Date();
//		var time = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + " at " + currentDate.getHours() + ":" + currentDate.getMinutes();
//
//		this.sentEmail = function () {
//			$http({
//				method: "POST",
//				url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
//				data: {
//					"key": "a2o-Xz8u1Lrb75Z2NlscsQ",
//					"template_name": "theyogime",
//					"template_content": [
//						{
//							"name": "example name",
//							"content": "example content"
//							}
//						],
//					"message": {
//						"from_email": 'ganderson7197@icloud.com',
//						"from_name": 'TheYogiMe',
//
//						'headers': {
//							'Reply-To': 'ganderson7197@icloud.com'
//						},
//
//						'subject': 'Lead for Private Lesson',
//						'to': [
//							{
//								'email': this.getEmail,
//								'name': 'name',
//								'type': 'to'
//									}],
//					}
//				}
//			})
//		}
//	});

//'use strict'
//
//angular.module('theYogiMe')
//    .controller('mapCtrl', ['$scope', '$firebaseObject', function mapCtrl($scope, $firebaseObject) {
//        $scope.map = {
//            center: {
//                latitude: 28.6626364,
//                longitude: -81.3766657
//            },
//            zoom: 11
//        };
//        $scope.studioMarkers = [{
//                // body coach 
//                id: 1,
//                latitude: 28.757783,
//                longitude: -81.369105
//        },
//            { //serenity now yoga
//                id: 2,
//                latitude: 28.6981543,
//                longitude: -81.3753033
//                },
//            { //altamonte springs yoga
//                id: 3,
//                latitude: 28.6957451,
//                longitude: -81.3890362
//                }
//            { // zenality yoga studio
//                id: 4,
//                latitude: 28.6726664,
//                longitude: -81.4198279
//            },
//            {
//                id: 5,
//                latitude: 28.6722146,
//                longitude: -81.4737296
//                }
//];

// this is where you will put the firebase array
//        var ref = new Firebase('https://theyogime.firebaseio.com/');
//
//        $scope.addReview = function () {
//            ref.child('reviews').set({
//                studio1: $scope.yogaReview //this is what is being modeled
//})
//            $scope.yogaReview = ''; // this resets the form
//};
//}]);