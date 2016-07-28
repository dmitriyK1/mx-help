(function () {
	'use strict';

	angular.module('app').controller('MultiPickerController', MultiPickerController);

	MultiPickerController.$inject = ['$q'];

	function MultiPickerController($q) {
		var vm = this;

		vm.pickerData = [{id: 1, title: 'item 1'}, {id: 2, title: 'item 2'}, {id: 3, title: 'item 3'}, {
			id: 4,
			title: 'item 4'
		}, {id: 5, title: 'item 5'}];
		vm.pickerArray = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
		vm.pickerArrayValue = 'Item5';
		vm.pickerValue = [1, 2];

		var items = [
			{
				Value: 1,
				DisplayString: 'ABA'
			},
			{
				Value: 2,
				DisplayString: 'ABC'
			},
			{
				Value: 3,
				DisplayString: 'BBC'
			},
			{
				Value: 4,
				DisplayString: 'BAC'
			},
			{
				Value: 5,
				DisplayString: 'BCS'
			},
			{
				Value: 6,
				DisplayString: 'AAA'
			}
		];
		vm.pickerLoadOnTypingValue = [items[0].Value];
		vm.pickerSimpleValue = ['Apple'];
		vm.pickerCommaValue = '1, 3';

		vm.loadItems = function (searchText) {

			console.log(searchText);
			var res = [];

			items.forEach(function (item) {
				if (item.DisplayString.toLowerCase().startsWith(searchText)) {
					res.push(item);
				}
			});

			return $q.when({items: res, searchText: searchText});
		};

		vm.navigateSelectedItem = function (item) {
			alert(JSON.stringify(item));
		};

		vm.browseLookup = function () {
			if (confirm('Add items?')) {
				return $q.when([vm.pickerData[2], vm.pickerData[4]]);
			} else {
				return $q.when();
			}
		};
	}

})();
