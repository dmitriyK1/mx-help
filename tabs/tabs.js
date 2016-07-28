(function () {
	'use strict';
	angular.module('app').controller('TabsController', TabsController);

	TabsController.$inject = ['$scope'];

	function TabsController($scope) {
		$scope.parent = {};
		$scope.parent.roles = ['role1', 'role2', 'role3'];
		$scope.addRole = function(){
			$scope.parent.roles.push('test role');
		};
		$scope.removeRole = function(){
			$scope.parent.roles.splice(0,1);
		};


		$scope.tabs =  [
			{id:'1111111', title: 'Users Of Current State In this world', count: 1, position:2},
			{id:'roles', title: 'Roles', count: $scope.parent.roles, position:1},
			{id:'1111113', title: 'Locations', count: 4, position:3}
		];
	}
})();
