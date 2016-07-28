(function () {
	'use strict';

	angular.module('app').controller('DragndropController', DragndropController);

	DragndropController.$inject = ['mx.components.DragNDropUtils'];

	function DragndropController(dragNDropUtils) {
		var vm = this;
		vm.value1 = 'value 1';
		vm.value2 = 'value 2';

		vm.onDrop = function (event) {
			alert(dragNDropUtils.getDropData(event, 'data'));
		};
	}
})();
