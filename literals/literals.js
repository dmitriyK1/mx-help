(function () {
	'use strict';

	angular.module('app').controller('LiteralsController', LiteralsController);

	LiteralsController.$inject = [];

	function LiteralsController() {
		var vm = this;
		vm.untypedValue = 'Untyped value';
		vm.now = Date.now();
		vm.text = 'The issue with this method is that all the elements are checked at once (potential performance impact) and it only calculates once, so that if the user shrinks the browser causing things to get truncated or expands, causing them to no longer be truncated you cannot update the presence of a tooltip. Attaching your code to window resize again would have a performance issue as every item checks its size. By using event delegation "$(document)';
		vm.text1 = '';
		vm.text2 = null;
		vm.text3 = undefined;
		var index = 1;
		vm.setValue = function () {
			vm.text3 = 'index = ' + index;
			index++;
		};
		vm.ref3 = '';

		vm.setValue2 = function () {
			vm.ref3 = 'index = ' + index;
			index++;
		};
	}
})();
