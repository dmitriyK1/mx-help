(function () {
	'use strict';

	angular.module('app').controller('FeedbackController', FeedbackController);

	FeedbackController.$inject = ['$q', '$timeout', '$location', '$window', 'mx.internationalization'];

	function FeedbackController($q, $timeout, $location, $window, internationalization) {
		var lng = $location.search().lng;
		var vm = this;
		//var defer = $q.defer();
		//vm.isFeedbackEnabled = defer.promise;
		vm.isFeedbackEnabled = true; //defer.promise;
		vm.language = lng || 'en';
		vm.feedbackData = {};
		internationalization.language = vm.language;
		vm.send = function (feedback) {
			//$window.feedbackToBeSent = feedback;
			vm.feedbackData = feedback;
		};

		//$timeout(function () {
		//	defer.resolve(true);
		//}, 500);
	}

})();
