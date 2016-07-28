(function () {
	'use strict';

	angular.module('app').controller('FormController', FormController);

	FormController.$inject = [];

	function FormController() {
		var vm = this;
		vm.inputData = 'some data';
		vm.intData = 123;
		vm.dateData = new Date();
		vm.errors = [];
		var index = 1;
		vm.isWarningActive = false;
		vm.dateISO = '2016-01-19T22:00:00';
		vm.dateISO2 = null;
		vm.dateISO3 = new Date();

		vm.addErrors = function () {
			index++;
			vm.errors = ['Server Error' + index];
		};

		vm.resetErrors = function () {
			vm.errors = null;
		};

		vm.switchWarningActive = function () {
			vm.isWarningActive = !vm.isWarningActive;
		};
	}
})();
