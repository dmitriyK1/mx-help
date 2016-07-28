(function () {
	'use strict';
	angular.module('app').controller('TabControllerE2E', TabControllerE2E);

	TabControllerE2E.$inject = ['$scope'];

	function TabControllerE2E($scope) {
		var vm = this;
		vm.text1 = 'zxc';
		$scope.tabs = [	{id:"1", title:"Tab 1", description:"Some description 1.", name:"tab1", disabled:"false", position:1},
			{id:"0", title:"Tab 0", description:"Some description 0.", name:"tab0", disabled:"false", position:0},
			{id:"2", title:"Tab 2", description:"Some description 2.", name:"tab2", disabled:"false", position:10},
			{id:"3", title:"Tab 3", description:"Some description 3.", name:"tab3", disabled:"false", position:10} ];
	}
})();
