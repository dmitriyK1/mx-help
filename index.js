(function () {
	'use strict';

	angular.module('app', [
		'ngRoute',
		'mx.components',
		'angularMoment'
	])
		.config(['$routeProvider', 'mx.components.DataProviderRegistryProvider', 'mx.internationalizationProvider',
			function ($routeProvider, dataProviderRegistry, internationalizationProvider) {

			internationalizationProvider.setLanguage('de');
			internationalizationProvider.addNamespace(new mx.internationalization.Namespace('sample', 'localization/#LNG#.json'));
			$routeProvider
				.when('/help', {
					controller: 'HelpController',
					controllerAs: 'vm',
					templateUrl: 'help/help.html'
				})
				.when('/repeater', {
					controller: 'RepeaterController',
					controllerAs: 'vm',
					templateUrl: 'repeater/repeater.html'
				}).when('/tabs', {
					controller: 'TabsController',
					controllerAs: 'vm',
					templateUrl: 'tabs/tabs.html'
				})
				.when('/choice', {
					controller: 'ChoiceController',
					controllerAs: 'vm',
					templateUrl: 'choice/choice.html'
				})
				.when('/choiceE2E', {
					controller: 'ChoiceControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'choice/tests/choiceE2E.html'
				})
				.when('/grid', {
					controller: 'GridController',
					controllerAs: 'vm',
					templateUrl: 'grid/grid.html'
				})
				.when('/grid/notitle', {
					controller: 'GridController',
					controllerAs: 'vm',
					templateUrl: 'grid/grid-no-title.html'
				})
				.when('/grid/notitleandactions', {
					controller: 'GridController',
					controllerAs: 'vm',
					templateUrl: 'grid/grid-no-title-and-actions.html'
				})
				.when('/feedback', {
					controller: 'FeedbackController',
					controllerAs: 'vm',
					templateUrl: 'feedback/feedback.html'
				})
				.when('/picker', {
					controller: 'PickerController',
					controllerAs: 'vm',
					templateUrl: 'picker/picker.html'
				})
				.when('/icon-picker', {
					controller: 'IconPickerController',
					controllerAs: 'vm',
					templateUrl: 'icon-picker/icon-picker.html'
				})
				.when('/multipicker', {
					controller: 'MultiPickerController',
					controllerAs: 'vm',
					templateUrl: 'multipicker/multipicker.html'
				})
				.when('/accordion', {
					controller: 'AccordionController',
					controllerAs: 'vm',
					templateUrl: 'accordion/accordion.html'
				})
				.when('/list', {
					controller: 'ListController',
					controllerAs: 'vm',
					templateUrl: 'list/list.html'
				})
				.when('/tiles', {
					controller: 'TilesController',
					controllerAs: 'vm',
					templateUrl: 'tiles/tiles.html'
				})
				.when('/mask', {
					controller: 'MaskController',
					controllerAs: 'vm',
					templateUrl: 'mask/mask.html'
				})
				.when('/pickerTest', {
					controller: 'PickerTestController',
					controllerAs: 'vm',
					templateUrl: 'pickerTest/pickerTest.html'
				})
				.when('/form', {
					controller: 'FormController',
					controllerAs: 'vm',
					templateUrl: 'form/form.html'
				})
				.when('/checkbox', {
					controller: 'CheckBoxController',
					controllerAs: 'vm',
					templateUrl: 'checkbox/checkbox.html'
				})
				.when('/formcontrols', {
					controller: 'FormControlsController',
					controllerAs: 'vm',
					templateUrl: 'formControls/formControls.html'
				})
				.when('/dragndrop', {
					controller: 'DragndropController',
					controllerAs: 'vm',
					templateUrl: 'dragndrop/dragndrop.html'
				})
				.when('/journal', {
					controller: 'JournalController',
					controllerAs: 'vm',
					templateUrl: 'journal/journal.html'
				})
				.when('/literals', {
					controller: 'LiteralsController',
					controllerAs: 'vm',
					templateUrl: 'literals/literals.html'
				})
				.when('/uploader', {
					controller: 'UploaderController',
					controllerAs: 'vm',
					templateUrl: 'uploader/uploader.html'
				})
				.when('/internationalization', {
					controller: 'InternationalizationController',
					controllerAs: 'vm',
					templateUrl: 'internationalization/internationalization.html'
				})
				.when('/richtext', {
					controller: 'MxRichTextController',
					controllerAs: 'vm',
					templateUrl: 'richtext/richtext.html'
				})
				.when('/textbox', {
					controller: 'TextboxController',
					controllerAs: 'vm',
					templateUrl: 'textbox/textbox.html'
				})
				.when('/richtext_template/jpg', {
					controller: 'MxRichTextController',
					controllerAs: 'vm',
					templateUrl: 'richtext/templates/jpg.html'
				})
				.when('/richtext_template/png', {
					controller: 'MxRichTextController',
					controllerAs: 'vm',
					templateUrl: 'richtext/templates/png.html'
				})
				.when('/pickerTestE2E', {
					controller: 'PickerTestControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'pickerTest/tests/pickerTestE2E.html'
				})
				.when('/multipickerE2E', {
					controller: 'MultiPickerControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'multipicker/tests/multipickerE2E.html'
				})
				.when('/textboxE2E', {
					controller: 'TextboxControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'textbox/tests/textboxE2E.html'
				})
				.when('/checkboxE2E', {
					controller: 'CheckBoxControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'checkbox/tests/checkboxE2E.html'
				})
				.when('/richtextE2E', {
					controller: 'MxRichTextController',
					controllerAs: 'vm',
					templateUrl: 'richtext/tests/richtextE2E.html'
				})
				.when('/literalsE2E', {
					controller: 'LiteralsControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'literals/tests/literalsE2E.html'
				})
				.when('/currencyE2E', {
					controller: 'CurrencyControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'currency/tests/currencyE2E.html'
				})
				.when('/datetimepickerE2E', {
					controller: 'MxDatePickerControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'datetimepicker/tests/datetimepickerE2E.html'
				})
				.when('/icon-pickerE2E', {
					controller: 'IconPickerControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'icon-picker/tests/icon-pickerE2E.html'
				})
				.when('/repeaterE2E', {
					controller: 'RepeaterControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'repeater/tests/repeaterE2E.html'
				})
				.when('/tabsE2E', {
					controller: 'TabControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'tabs/tests/tabsE2E.html'
				})
				.when('/ratingE2E', {
					controller: 'RatingControllerE2E',
					controllerAs: 'vm',
					templateUrl: 'rating/tests/ratingE2E.html'
				})
				.when('/bottomSheet', {
					controller: 'BottomSheetController',
					controllerAs: 'vm',
					templateUrl: 'bottomSheet/bottomSheet.html'
				})
				.when('/calendar', {
					controller: 'CalendarController',
					controllerAs: 'vm',
					templateUrl: 'calendar/calendar.html'
				})
				.otherwise({
					redirectTo: 'literals'
				});

			dataProviderRegistry.register('sampleDataProvider', new mx.components.DataProvider(function($injector, parameters) {
				if (!parameters) {
					return [];
				}
				switch (parameters.dataSetId) {
					case 'for-mx-picker1':
						return [{id:1,name:'remote item 1'},{id:2,name:'remote item 2'},{id:3,name:'remote item 3'},{id:4,name:'remote item 4'}];
					case 'for-mx-picker2':
						return [{id:5,name:'remote item 5'},{id:6,name:'remote item 6'},{id:7,name:'remote item 7'},{id:8,name:'remote item 8'}];
					case 'for-mx-picker3':
						return [{id:9,name:'remote item 9'},{id:10,name:'remote item 10'},{id:11,name:'remote item 11'},{id:12,name:'remote item 12'}];
				}
				return [];

			}));
		}])
		.controller('SampleController', SampleController);

	SampleController.$inject = [];

	/* @ngInject */
	function SampleController() {

	}

})();
