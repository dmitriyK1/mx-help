(function () {
	'use strict';

	angular.module('app').controller('IconPickerControllerE2E', IconPickerControllerE2E);

	IconPickerControllerE2E.$inject = ['$timeout', 'mx.internationalization', '$scope'];

	function IconPickerControllerE2E($timeout, internationalization, $scope) {
		var vm = this;
		vm.icon = '';
		vm.icon1 = '3d_rotation';

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

		return vm;
	}

})();
