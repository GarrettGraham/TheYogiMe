'use strict';

angular.module('theYogiMe')
	.controller('lessonCtrl', function () {
		$('#submitEmail').on('click', function () {
			alert('Your email was sent successfully');
		});
	});