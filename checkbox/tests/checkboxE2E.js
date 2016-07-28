(function () {
	'use strict';

	angular.module('app').controller('CheckBoxControllerE2E', CheckBoxControllerE2E);

	CheckBoxControllerE2E.$inject = ['$timeout', 'mx.internationalization', '$scope'];

	function CheckBoxControllerE2E($timeout, internationalization, $scope) {
		var vm = this;
		vm.checkbox = false;
		vm.checkbox3 = true;
		vm.checkbox4 = true;
		vm.checkbox5 = true;
		vm.checkbox8 = true;
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
	}
})();
