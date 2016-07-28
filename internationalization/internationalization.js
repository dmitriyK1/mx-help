(function () {
	'use strict';

	angular.module('app').controller('InternationalizationController', InternationalizationController);

	InternationalizationController.$inject = ['mx.internationalization', '$timeout'];

	function InternationalizationController(internationalization, $timeout) {
		var vm = this;
		vm.language = internationalization.language;

		vm.changelng = function () {
			internationalization.language = vm.language;
			vm.lngValue1 = internationalization.get('sample.test1');
			vm.lngValue3 = internationalization.getFormatted('sample.test3', 'param 1 value', 'param 2 value');
			vm.refresh = true;
			$timeout(function () {
				vm.refresh = false;
			});
		};

		vm.changelng();
	}
})();
