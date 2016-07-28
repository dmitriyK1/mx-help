(function () {
	'use strict';
	angular.module('app').controller('ChoiceController', ChoiceController);

	ChoiceController.$inject = ['$q', '$timeout', 'mx.internationalization', '$scope'];

	function ChoiceController($q, $timeout, internationalization, $scope) {

		$scope.panel = 'panel1';
		$scope.text1 = 'tttttt';
		$scope.text2 = '';
		$scope.showButtons = true;
		//$scope.selectedPanel='panel1'

	}

})();

