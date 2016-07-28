(function () {
	'use strict';

	angular.module('app').controller('FormControlsController', FormControlsController);

	FormControlsController.$inject = ['$q'];

	function FormControlsController($q) {
		var vm = this;

		vm.pickerData = [{id: 1, title: 'item 1'}, {id: 2, title: 'item 2'}, {id: 3, title: 'item 3'}, {
			id: 4,
			title: 'item 4'
		}];
		vm.pickerValue = 2;

		vm.items = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'AB'}, {id: 4, name: 'BC'}];
		vm.loadItems = function (searchText) {
			console.log(searchText);
			searchText = searchText.toUpperCase();
			return $q.when(vm.items.filter(function (item) {
				return item.name.startsWith(searchText);
			}));
		};
	}
})();
