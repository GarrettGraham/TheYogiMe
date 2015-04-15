'use strict';

angular.module('theYogiMe')
	.controller('lessonCtrl', function () {
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

				$.ajax({
						method: "POST",
						url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
						data: {
							'key': 'a2o-Xz8u1Lrb75Z2NlscsQ',
							'template_name': 'TheYogiMe',
							'template_content': [
								{
									'name': 'example name',
									'content': 'example content',
												}
											],
							'message': {
								'from_email': clientEmail,
								'from_name': name,
								'headers': {
									'Reply-To': clientEmail
								},
								'subject': 'Client Lead Contact Form Submission',
								'to': [
									{
										'email': 'ganderson7197@icloud.com',
										'name': 'Garrett Graham',
										'type': 'to'
									}],
								'global_merge_vars': [
									{
										'name': 'name',
										'content': name
									},
									{
										'name': 'classSelection',
										'content': classSelection
									},
									{
										'name': 'clientGoals',
										'content': clientGoals
									},
									{
										'name': 'lessonTime',
										'content': lessonTime
									},
									{
										'name': 'clientInfo',
										'content': clientInfo
									},
									{
										'name': 'firstName',
										'content': firstName
									},
									{
										'name': 'lastName',
										'content': lastName
									},
									{
										'name': 'clientEmail',
										'content': clientEmail
									},
									{
										'name': 'phoneNumber',
										'content': phoneNumber
									}
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
					})
			});
		});
	});
//});