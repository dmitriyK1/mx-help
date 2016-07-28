(function () {
	'use strict';

	angular.module('app').controller('CheckBoxController', CheckBoxController);

	CheckBoxController.$inject = ['$q', '$timeout', 'mx.internationalization', '$scope'];

	function CheckBoxController($q, $timeout, internationalization, $scope) {
		var vm = this;
		vm.checkbox = false;
		vm.checkbox3 = true;
		vm.checkbox4 = true;
		vm.checkbox5 = true;
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
