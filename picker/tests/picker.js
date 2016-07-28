(function () {
	'use strict';

	angular.module('app').controller('PickerController', PickerController);

	PickerController.$inject = ['$q'];

	function PickerController($q) {
		var vm = this;
		vm.readOnly = true;
		vm.isDisabled = true;


		vm.pickerValue = 2;
		vm.pickerData = [{id: 1, title: 'item 1'}, {id: 2, title: 'item 2'}, {id: 3, title: 'item 3'}, {
			id: 4,
			title: 'item 4'
		}, {id: 104, title: 'filtered item 1'}, {id: 105, title: 'filtered item 2'}];
		vm.pickerArray = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
		vm.pickerArrayValue = 'Item5';

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
			},
			{
				Value: 7,
				DisplayString: 'ABZ'
			}
		];
		vm.pickerLoadOnTypingValue = items[0];

		vm.loadItems = function (searchText) {

			console.log(searchText);
			var res = [];

			items.forEach(function (item) {
				if (item.DisplayString.toLowerCase().startsWith(searchText)) {
					res.push(item);
				}
			});
			var retr = res.slice(0, 3);


			return $q.when({items: retr, searchText: searchText, all: res.length !== retr.length});
		};

		vm.navigateSelectedItem = function (item) {
			alert(JSON.stringify(item));
		};

		vm.browseLookup = function () {
			if (confirm('Add items?')) {
				return $q.when(vm.pickerData[2]);
			} else {
				return $q.when();
			}
		};
	}
})();
