(function () {
	'use strict';

	angular.module('app')
	.config(['mx.components.LazyLoadCfgProvider', function (lazyLoadCfgProvider) {
		// Example:
		lazyLoadCfgProvider.setComponentsDir('bower_components/');
	}])
	.controller('CalendarController', CalendarController);

	CalendarController.$inject = ['mx.components.LazyLoadCfg'];

	function CalendarController(LazyLoadCfg) {
		var vm = this;

		// Example:
		//LazyLoadCfg.componentsDir = 'bower_components/';

		vm.events = [{
			title: 'Event1',
			start: new Date()
		}, {
			title: 'Event2',
			start: '2016-06-03',
			end: '2016-06-04'
		}, {
			title  : 'Event3',
			start  : '2016-06-09T12:30:00',
			allDay : false
		}];


		vm.onRangeSelected = function () {
			alert(JSON.stringify(arguments));
		}
	}
})();
