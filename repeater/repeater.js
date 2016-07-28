(function () {
	'use strict';
	angular.module('app').controller('RepeaterController', RepeaterController);

	RepeaterController.$inject = ['$scope'];

	function RepeaterController($scope) {

		var dataArray = [
			{
				'Entity': 'Service Booking',
				'EntityTypeId': '6f3ed39c-0aab-4606-b44e-d646d077b361',
				'ObjectIds': ['f75af757-101c-e611-ed9b-8c89a56499ca']
			},
			{
				'Entity': 'Order Request',
				'EntityTypeId': '0566eada-859e-4e17-afbf-c8a98cfe0d27',
				'ObjectIds': ['df5af757-101c-e611-ed9b-8c89a56499ca']
			}
		];

		$scope.entities = dataArray;
		$scope.templateId = '6f3ed39c-0aab-4606-b44e-d646d077b361';
	}
})();
