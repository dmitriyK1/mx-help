(function () {
	'use strict';

	angular.module('app').controller('LiteralsControllerE2E', LiteralsControllerE2E);

	LiteralsControllerE2E.$inject = [];

	function LiteralsControllerE2E() {

		var vm = this;
		vm.literalValue = {
			text: 'OnClickTextLiteral',
			onClick: function () {
				alert('OnClickTextLiteralAlert');
			}
		};

		vm.literalValue2 = {
			text: 'LiteralText'
		};

		vm.literalValue3 = {
			text: ''
		};
		vm.untypedValue = 'Mock_Untyped value';
		vm.now = Date.now();
		vm.text = 'Mock_The issue with this method is that all the elements are checked at once (potential performance impact) and it only calculates once, so that if the user shrinks the browser causing things to get truncated or expands, causing them to no longer be truncated you cannot update the presence of a tooltip. Attaching your code to window resize again would have a performance issue as every item checks its size. By using event delegation "$(document)';
		vm.text1 = '';
		vm.text2 = null;
		vm.text3 = undefined;
		vm.html = '<h3>mx-literalHtml</h2>';

		var index = 1;
		vm.setValue = function () {
			vm.text3 = 'index = ' + index;
			index++;
		};
		vm.ref3 = '';

		vm.onClick = function () {
			return 'sss';
		};

		vm.setValue2 = function () {
			vm.ref3 = 'index = ' + index;
			index++;
		};
	}
})();
