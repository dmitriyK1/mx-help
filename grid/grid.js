(function () {
	'use strict';

	angular.module('app').controller('GridController', GridController);

	GridController.$inject = [];

	function GridController() {

		var vm = this;

		// This is an example of how to show nested data in your grid.
		// When loading your data into the controller, you can specify getters
		// for nested properties and add them to the dataItems as additional
		// property.

		function addGettersForNestedData(data) {
			data.forEach(function (item) {
				item.getNestedData = function () {
					return this.nested.nestedData;
				};
			});
		}
		// Example Gridoptions
		// Data to show in the grid
		vm.selectedItems =[
			{
				name: 'Alissa Altenberg',
				age: '26',
				gender: 'female',
				country: 'Germany',
				id: '142335',
				nested: {
					nestedData: '1'
				}
			}];

		vm.myData = [
			{
				name: 'Alissa Altenberg',
				age: '26',
				gender: 'female',
				country: 'Germany',
				id: '142335',
				nested: {
					nestedData: '1'
				}
			},
			{
				name: 'Samuel Sullivan',
				age: '33',
				gender: 'male',
				country: 'United Kingddom',
				id: '665542',
				nested: {
					nestedData: '2'
				}
			},
			{
				name: 'Jack Johnson',
				age: '45',
				gender: 'female',
				country: 'Australia',
				id: '888754',
				nested: {
					nestedData: '3'
				}
			},
			{
				name: 'Robert Robbespiére',
				age: '21',
				gender: 'male',
				country: 'France',
				id: '123567',
				nested: {
					nestedData: '4'
				}
			},
			{
				name: 'Fancesco Fragile ',
				age: '19',
				gender: 'male',
				country: 'Italy',
				id: '362514',
				nested: {
					nestedData: '5'
				}
			},
			{
				name: 'Hans Hammer',
				age: '55',
				gender: 'female',
				country: 'Germany',
				id: '142536',
				nested: {
					nestedData: '6'
				}
			},
			{
				name: 'Owen Olson',
				age: '67',
				gender: 'male',
				country: 'Australia',
				id: '585374',
				nested: {
					nestedData: '7'
				}
			},
			{
				name: 'Sergej Sargowski',
				age: '45',
				gender: 'female',
				country: 'Ukraine',
				id: '638654',
				nested: {
					nestedData: '8'
				}
			},
			{
				name: 'Martin Martschenko',
				age: '35',
				gender: 'female',
				country: 'Poland',
				id: '456987',
				nested: {
					nestedData: '9'
				}
			},
			{
				name: 'Ursula Uhrmacher',
				age: '46',
				gender: 'female',
				country: 'Switzerland',
				id: '123568',
				nested: {
					nestedData: '10'
				}
			},
			{
				name: 'Alexandros Alonsos',
				age: '33',
				gender: 'male',
				country: 'Greece',
				id: '649737',
				nested: {
					nestedData: '11'
				}
			},
			{
				name: 'Graham Gunshot',
				age: '32',
				gender: 'male',
				country: 'USA',
				id: '782456',
				nested: {
					nestedData: '12'
				}
			},
			{
				name: 'Tim Tober',
				age: '25',
				gender: 'male',
				country: 'Germany',
				id: '789654',
				nested: {
					nestedData: '13'
				}
			},
			{
				name: 'Ivan Ivanovitsk',
				age: '38',
				gender: 'male',
				country: 'Russia',
				id: '767345',
				nested: {
					nestedData: '14'
				}
			},
			{
				name: 'Brian Brenson',
				age: '29',
				gender: 'male',
				country: 'United Kingdom',
				id: '456654',
				nested: {
					nestedData: '15'
				}
			},
			{
				name: 'Jenny Jersey',
				age: '31',
				gender: 'female',
				country: 'USA',
				id: '654789',
				nested: {
					nestedData: '16'
				}
			},
			{
				name: 'Anna Albright',
				age: '62',
				gender: 'female',
				country: 'Australia',
				id: '123456',
				nested: {
					nestedData: '17'
				}
			},
			{
				name: 'Mao Mong',
				age: '48',
				gender: 'male',
				country: 'China',
				id: '345678',
				nested: {
					nestedData: '18'
				}
			}
		];

		vm.gridOptions = {
			data: vm.myData,
			highlightOnClick: false,
			selectablePageSizes: [5, 10, 15],
			pageSize: 10,
			columns: [
				{
					'Title': 'Username',
					'Name': 'name'
				},
				{
					'Title': 'Age',
					'Name': 'age'
				},
				{
					'Title': 'Gender',
					'Name': 'gender'
				},
				{
					'Title': 'Country',
					'Name': 'country'
				},
				{
					'Title': 'ID',
					'Name': 'id'
				},
				{
					'Title': 'Nested Data',
					'Name': 'getNestedData()'
				}

			],
			editMode: 1,
			allowPaging: true,
			totalItems: vm.myData.length,
			enableHorizontalScrollbar: 0,
			onItemClick: function (entity) {
				alert('onItemClick for item: ' + entity.$$hashKey);
			}

		};

		addGettersForNestedData(this.myData);
	}

})();
