(function () {
	'use strict';

	angular.module('app').controller('MxDatePickerControllerE2E', MxDatePickerControllerE2E);

	MxDatePickerControllerE2E.$inject = [];

	function MxDatePickerControllerE2E() {
		var vm = this;
		vm.required = true;
		vm.label = 'datatime';
		vm.internalName = 'datatime1';
		vm.title = 'date time title';
		vm.required = false;
		vm.disabled = false;
		vm.readOnly = false;
	}
})();
