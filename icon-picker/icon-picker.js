(function () {
	'use strict';

	angular.module('app').controller('IconPickerController', IconPickerController);

	IconPickerController.$inject = [];

	function IconPickerController() {
		var vm = this;
		vm.icon = '';
		vm.icon1 = '3d_rotation';

		return vm;
	}
})();
