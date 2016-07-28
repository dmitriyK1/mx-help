(function () {
	'use strict';

	angular.module('app').controller('MaskController', MaskController);

	MaskController.$inject = [];

	function MaskController() {
		var vm = this;
		vm.intValue = 32;
		vm.floatValue = 55.34;
	}

})();
