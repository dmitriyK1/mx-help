(function () {
	'use strict';
	angular.module('app').controller('RepeaterControllerE2E', RepeaterControllerE2E);

	RepeaterControllerE2E.$inject = ['$q', '$timeout', 'mx.internationalization', '$scope'];

	function RepeaterControllerE2E($q, $timeout, internationalization, $scope) {

		var vm = this;
		vm.id = '6f3ed39c-0aab-4606-b44e-d646d077b361';

		var dataArray = [
			{ "Entity": "Service Booking", "EntityTypeId": "6f3ed39c-0aab-4606-b44e-d646d077b361", "ObjectIds": ["f75af757-101c-e611-ed9b-8c89a56499ca"] },
			{ "Entity": "Order Request", "EntityTypeId": "0566eada-859e-4e17-afbf-c8a98cfe0d27", "ObjectIds": ["df5af757-101c-e611-ed9b-8c89a56499ca"] }
		];


		var dataArrayTextBox = [
			{ "Entity": "", "EntityTypeId": "6f3ed39c-0aab-4606-b44e-d646d077b361", "ObjectIds": ["f75af757-101c-e611-ed9b-8c89a56499ca"] },
			{ "Entity": "Tasks", "EntityTypeId": "0566eada-859e-4e17-afbf-c8a98cfe0d27", "ObjectIds": ["df5af757-101c-e611-ed9b-8c89a56499ca"] },
			{ "Entity": "Workflows", "EntityTypeId": "0566eada-859e-4e17-afbf-c8a98cfe0d28", "ObjectIds": ["df5af757-101c-e611-ed9b-8c89a56499ca"] }
		];


		var dataArrayPicker = [
			{ "array": dataArrayTextBox },
			{  "array": dataArrayTextBox },
			{  "array": dataArrayTextBox}
		];

		$scope.entities = dataArray;
		$scope.templateId = '6f3ed39c-0aab-4606-b44e-d646d077b361';

		$scope.entitiesTextBox = dataArrayTextBox;
		$scope.templateIdTextBox = '6f3ed39c-0aab-4606-b44e-d646d077b362';

		$scope.entitiesPicker = dataArrayPicker;
		$scope.templateIdPicker = '6f3ed39c-0aab-4606-b44e-d646d077b363';

		$scope.entitiesTextBox2 = dataArrayPicker;
		$scope.templateIdTextBox2 = '6f3ed39c-0aab-4606-b44e-d646d077b364';
	}

})();
