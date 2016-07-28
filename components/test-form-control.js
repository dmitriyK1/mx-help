(function () {
	'use strict';

	TestFormControlsCtrl.$inject = ['$scope'];

	function TestFormControlsCtrl($scope) {
		var vm = this;

		vm.isRequired = false;
		vm.isReadonly = false;
		vm.isDisabled = false;
		vm.controlValue = null;
		vm.valueHistory = [];
		vm.setValue = function () {
			if (formController) {
				if (formController.constructor && formController.constructor.name && formController.constructor.name === 'MxCheckboxCtrl') {
					formController.model = (vm.controlValue || '').toLowerCase() === 'true';
				} else {
					formController.model = vm.controlValue;
				}
			}
		};


		vm.readValues = function () {
			if (formController) {
				vm.controlValue = formController.model;
			}

		};

		vm.onRequiredChanged = function () {
			if (formController) {
				formController.required = vm.isRequired;
			}
		};

		vm.onReadonlyChanged = function () {
			if (formController) {
				formController.readOnly = vm.isReadonly;
			}
		};

		vm.onDisabledChanged = function () {
			if (formController) {
				formController.disabled = vm.isDisabled;
			}
		};

		var formController = null;

		vm.initializeFormControlContollers = function () {
			formController = null;
			seekFormControlContollers($scope);

			if (formController) {
				formController.onChange = vm.onChange;
			}
		};

		vm.onChange = function () {
			if (formController) {
				vm.controlValue = formController.model;
				vm.valueHistory.push(formController.model);
			}
		};

		return vm;


		function seekFormControlContollers(scope) {
			for (var cs = scope.$$childHead; cs && !formController; cs = cs.$$nextSibling) {
				if (cs.$$childHead) {
					seekFormControlContollers(cs);
				}
				if (typeof cs.vm !== 'undefined' && typeof cs.vm.label !== 'undefined' && typeof cs.vm.internalName !== 'undefined') {
					formController = cs.vm;
					return;
				}
			}
		}
	}

	angular.module('app').directive('testFormControl', function () {
		return {
			restrict: 'E',
			link: function (scope) {
				scope.vm.initializeFormControlContollers();
			},
			transclude: true,
			scope: {},
			bindToController: {
				title: '@'
			},
			controller: TestFormControlsCtrl,
			controllerAs: 'vm',
			templateUrl: '../components/test-form-control.html'
		};
	});
})();
