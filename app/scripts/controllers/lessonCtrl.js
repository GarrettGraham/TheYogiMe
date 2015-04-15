'use strict';

angular.module('theYogiMe')
	.controller('lessonCtrl', function ($http, $scope) {
		//		var self = this;
		jQuery(function ($) {
			$('#contactForm').submit(function () {
					var name = $('#clientName').val(); //get first name field value
					var classSelection = $('#classSelection').val(); //get class selection field value
					var clientGoals = $('#clientGoals').val(); //get client goals selection field value
					var lessonTime = $('#lessonTime').val(); //get lesson time selection field value 
					var clientInfo = $('#clientInfo').val(); // get client info field value
					var firstName = $('#firstName').val(); //get client first name field value
					var lastName = $('#lastName').val(); // get client last name field value
					var clientEmail = $('#clientEmail').val(); //get client email field value
					var phoneNumber = $('#phoneNumber').val(); //get client phone number field value

					//				$http({
					$.ajax({
							method: "POST",
							url: "https://mandrillapp.com/api/1.0/messages/send.json",
							data: {
								'key': 'a2o-Xz8u1Lrb75Z2NlscsQ',
								'template_name': 'the-yogi-me',
								'template_content': [
									{
									}
								],
															'message': {
														'from_email': clientEmail,
														'from_name': name,
														'headers': {
															'Reply-To': clientEmail
														},
														'subject': 'Client Lead Contact Form Submission',
														//								'text': 'clietnGoals' && 'clientInfo',
														'to': [
															{
																'email': 'ganderson7197@icloud.com',
																'name': 'Garrett Graham',
																'type': 'to'
																					}],
														'global_merge_vars': [
																{
																	'name': 'name',
																	'content': $scope.clientName
																												},
								//									{
								//										'name': 'classSelection',
								//										'content': $scope.classSelection
								//},
								//									{
								//										'name': 'clientGoals',
								//										'content': this.clientGoals
								//												},
								//									{
								//										'name': 'lessonTime',
								//										'content': this.lessonTime
								//												},
								//									{
								//										'name': 'clientInfo',
								//										'content': this.clientInfo
								//												},
								//									{
								//										'name': 'firstName',
								//										'content': this.firstName
								//												},
								//									{
								//										'name': 'lastName',
								//										'content': this.lastName
								//												},
								//									{
								//										'name': 'clientEmail',
								//										'content': this.clientEmail
								//												},
								//									{
								//										'name': 'phoneNumber',
								//										'content': this.phoneNumber
								//												},
								]
						}
					}
				})
				.success(function (response) {
					alert('Your messsage has been sent. Thank you!'); //show success message
					var name = $('#clientName').val(''); //reset first name field value
					var classSelection = $('#classSelection').val(''); //reset class selection field value
					var clientGoals = $('#clientGoals').val(''); //reset client goals selection field value
					var lessonTime = $('#lessonTime').val(''); //reset lesson time selection field value 
					var clientInfo = $('#clientInfo').val(''); // reset client info field value
					var firstName = $('#firstName').val(''); // reset client first name field value
					var lastName = $('#lastName').val(''); // reset client last name field value
					var clientEmail = $('#clientEmail').val(''); // reset client email field value
					var phoneNumber = $('#phoneNumber').val(''); // reset client phone number field value
				})
				.error(function (response) {
					alert('Error sending message.');
				});


			//		$('#submitEmail').on('click', function () {
			//			alert('Your email was sent successfully');
		});
	});
});