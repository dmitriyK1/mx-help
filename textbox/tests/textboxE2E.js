(function () {
	'use strict';

	angular.module('app').controller('TextboxControllerE2E', TextboxControllerE2E);


	TextboxControllerE2E.$inject = ['$q', '$timeout', 'mx.internationalization', '$scope'];

	function TextboxControllerE2E($q, $timeout, internationalization, $scope) {
		var vm = this;
		vm.refresh = false;
		vm.selectedLanguage = internationalization.language;

		if (vm.selectedLanguage) {
			internationalization.language = vm.selectedLanguage;
		}

		vm.languages = ['en', 'de'];


		$scope.$watch('vm.selectedLanguage', function (newVal) {
			if (newVal === internationalization.language) {
				return;
			}

			vm.refresh = true;
			internationalization.language = vm.selectedLanguage;
			$timeout(function () {
				vm.refresh = false;
			});
		});

		vm.localization = {
			'userInput.required': 'User name must be populated with some data',
			'custValidation.error': 'change user to 123'
		};
		vm.inputData = 'some data';
		vm.inputData1 = 'some data2';
		vm.inputData3 = 'Char: !@#$%^&*()_+~}"{:?><MЁ!"№;%:?*()_+/ЪХЖЭ,_äöüß€';
		vm.currencyValue = 123.03;
		vm.currencyCode = 'USD';
		vm.onChange = function () {
			alert(1);
		};
	}
})();
