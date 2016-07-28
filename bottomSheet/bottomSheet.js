(function () {
	'use strict';

	angular.module('app')
		.config(['$mdIconProvider', function ($mdIconProvider) {
			$mdIconProvider.iconSet('mxComponents', 'mx-components-icons.svg');
		}])
		.controller('BottomSheetController', BottomSheetController);

	BottomSheetController.$inject = ['$scope'];

	function BottomSheetController($scope) {

		$scope.items = [
			{
				name: 'Cancel', icon: 'md-cancel', execute: function () {
				alert('Cancel');
			}
			},
			{name: 'Close', icon: 'md-close', isFocused: 1 === 1},
			{name: 'Toggle Arrow', icon: 'md-toggle-arrow'},
			{name: 'Calendar', icon: 'md-calendar'}
		];
	}
})();

