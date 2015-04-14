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
					var clientName = $('#clientName').val(); //get client first name field value
					var lastName = $('#lastName').val(); // get client last name field value
					var clientEmail


					//		$('#submitEmail').on('click', function () {
					//			alert('Your email was sent successfully');
				});
			});

			//jQuery(function($)  
			//{
			//    $("#contact_form").submit(function()
			//    {
			//        var email = $("#email").val(); // get email field value
			//        var name = $("#name").val(); // get name field value
			//        var msg = $("#msg").val(); // get message field value
			//        $.ajax(
			//        {
			//            type: "POST",
			//            url: "https://mandrillapp.com/api/1.0/messages/send.json",
			//            data: {
			//                'key': 'sVRLFidC1A7K56TuUkyUQg',
			//                'message': {
			//                    'from_email': email,
			//                    'from_name': name,
			//                    'headers': {
			//                        'Reply-To': email
			//                    },
			//                    'subject': 'Website Contact Form Submission',
			//                    'text': msg,
			//                    'to': [
			//                    {
			//                        'email': 'riyadh@bscheme.com',
			//                        'name': 'Riyadh Al Nur',
			//                        'type': 'to'
			//                    }]
			//                }
			//            }
			//        })
			//        .done(function(response) {
			//            alert('Your message has been sent. Thank you!'); // show success message
			//            $("#name").val(''); // reset field after successful submission
			//            $("#email").val(''); // reset field after successful submission
			//            $("#msg").val(''); // reset field after successful submission
			//        })
			//        .fail(function(response) {
			//            alert('Error sending message.');
			//        });
			//        return false; // prevent page refresh
			//    });
			//});