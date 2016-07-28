(function () {
	'use strict';
	angular.module('app').controller('ChoiceControllerE2E', ChoiceControllerE2E);

	ChoiceControllerE2E.$inject = ['$scope'];

	function ChoiceControllerE2E($scope) {
		var vm = this;
		vm.text1 = 'zxc';
		$scope.panel = 'panel1';
		$scope.text1 = 'tttttt';
		$scope.text2 = '';
		$scope.showButtons = true;
		$scope.selectedPanel='panel1';
		$scope.customDataPanels = [	{id:"1", title:"Panel 1", description:"Some description 1.", name:"panel1", disabled:"false", position:1},
									{id:"0", title:"Panel 0", description:"Some description 0.", name:"panel0", disabled:"false", position:0},
									{id:"2", title:"Panel 2", description:"Some description 2.", name:"panel2", disabled:"false", position:10},
									{id:"3", title:"Panel 3", description:"Some description 3.", name:"panel3", disabled:"false", position:10} ];
	}
})();

