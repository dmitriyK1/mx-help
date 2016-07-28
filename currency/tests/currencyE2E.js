(function () {
	'use strict';

	angular.module('app').controller('CurrencyControllerE2E', CurrencyControllerE2E);


	CurrencyControllerE2E.$inject = ['$q', '$timeout', 'mx.internationalization', '$scope'];

	function CurrencyControllerE2E($q, $timeout, internationalization, $scope) {
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

		vm.currencyValueUSD = 123.03;


		vm.currencyValueUSD = 123.03;
		vm.currencyValueCAD = 5000.1;
		vm.currencyValueEUR = 12;
		vm.currencyValueCHF = 0.000001;


		vm.currencyCodeUSD = 'USD';
		vm.currencyCodeCAD = 'CAD';
		vm.currencyCodeEUR = 'EUR';
		vm.currencyCodeCHF = 'CHF';
		vm.currencyCodeEmpty = '';
	}
})();
