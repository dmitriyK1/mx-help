(function () {
	'use strict';

	angular.module('app').controller('MxRichTextController', MxRichTextController);

	MxRichTextController.$inject = [];

	function MxRichTextController() {
		var vm = this;
		vm.value1 = '<b>123</b>';
		vm.value2 = '<i>456</i>';

		vm.required = true;
		vm.label = 'Description';
		vm.title = 'The title of the object';
		vm.description = '<h1 class="api-profile-header-heading">$compile</h1>\
			<ol class="api-profile-header-structure naked-list step-list">\
			<li>\
			<a href="api/ng/provider/$compileProvider">- $compileProvider</a>\
			</li>\
			<li>\
			- service in module1 <a href="api/ng">ng</a>\
			</li>\
			</ol>\
			</header>\
			<div class="api-profile-description ng-scope">\
			<p>Compiles an HTML string or DOM into a template and produces a template function, which\
		can then be used to link <a href="api/ng/type/$rootScope.Scope"><code><span class="pln">scope</span></code></a> and the template together.</p>\
		<p>The compilation is a process of walking the DOM tree and matching DOM elements to \
		<a href="api/ng/provider/$compileProvider#directive">directives</a>.</p>\
		<h1 class="api-profile-header-heading">$compile</h1>\
			<ol class="api-profile-header-structure naked-list step-list">\
			<li>\
			<a href="api/ng/provider/$compileProvider">- $compileProvider</a>\
			</li>\
			<li>\
			- service in module1 <a href="api/ng">ng</a>\
			</li>\
			</ol>\
			</header>\
			<div class="api-profile-description ng-scope">\
			<p>Compiles an HTML string or DOM into a template and produces a template function, which\
		can then be used to link <a href="api/ng/type/$rootScope.Scope"><code><span class="pln">scope</span></code></a> and the template together.</p>\
		<p>The compilation is a process of walking the DOM tree and matching DOM elements to \
		<a href="api/ng/provider/$compileProvider#directive">directives</a>.</p>\
		<h1 class="api-profile-header-heading">$compile</h1>\
			<ol class="api-profile-header-structure naked-list step-list">\
			<li>\
			<a href="api/ng/provider/$compileProvider">- $compileProvider</a>\
			</li>\
			<li>\
			- service in module1 <a href="api/ng">ng</a>\
			</li>\
			</ol>\
			</header>\
			<div class="api-profile-description ng-scope">\
			<p>Compiles an HTML string or DOM into a template and produces a template function, which\
		can then be used to link <a href="api/ng/type/$rootScope.Scope"><code><span class="pln">scope</span></code></a> and the template together.</p>\
		<p>The compilation is a process of walking the DOM tree and matching DOM elements to \
		<a href="api/ng/provider/$compileProvider#directive">directives</a>.</p>';


		if (!vm.isReadonly) {
			vm.isReadonly = false;
		}
	}
})();
