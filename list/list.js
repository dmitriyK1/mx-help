(function () {
	'use strict';

	angular.module('app').controller('ListController', ListController);

	ListController.$inject = [];

	function ListController() {
		var vm = this;
		vm.getItemActions = function (item) {
			return [{
				icon: 'mode_edit',
				label: 'Open ' + item.title,
				onItemClick: function () {
					alert('tbc!');
				}
			}, {
				icon: 'save',
				label: 'Save',
				onItemClick: function () {
					alert(this.title + '\n....\nsaved!');
				}
			}, {
				icon: 'android',
				label: 'Load on phone',
				onItemClick: function () {
					alert('Loaded!');
				}
			}];
		};
		vm.data = [
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '0 -Lorem ipsum',
				description: 'Dolor sit amet'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '1 - Nulla suscipit consequat turpis',
				description: 'Etiam eleifend purus mollis aliquet suscipit. Sed eleifend tortor non neque vehicula condimentum'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '2 - Proin pharetra sagittis',
				description: 'Curabitur eget purus ut dolor venenatis eleifend'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '3 - Nunc eget lectus lorem',
				description: 'Integer ut lorem at ligula commodo efficitur. Mauris pulvinar euismod elit at malesuada. In elementum pharetra magna, sit amet venenatis ipsum eleifend ac. Morbi eleifend rutrum libero at sodales. Curabitur auctor tincidunt risus, et ultrices diam ultrices id'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '4 - Aenean eu aliquet neque',
				description: 'Sed vitae massa venenatis, gravida erat sed, tincidunt risus.'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '5 - Suspendisse eget eleifend urna. Morbi a est lacus',
				description: 'Praesent convallis dui elit, in pharetra nibh imperdiet nec'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '6 - Phasellus ac odio mi',
				description: 'Phasellus ac odio mi'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '7 - Lorem ipsum',
				description: 'Dolor sit amet'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '8 - Praesent convallis dui elit, in pharetra nibh imperdiet nec',
				description: 'Suspendisse eget eleifend urna. Morbi a est lacus'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: 'Nam non maximus erat, ac rhoncus massa',
				description: 'Phasellus ac odio mi'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: 'Suspendisse eget eleifend urna. Morbi a est lacus',
				description: 'Aenean eu aliquet neque'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '11 - Sed vitae massa venenatis, gravida erat sed, tincidunt risus.',
				description: ' Pellentesque quis dolor eget sem hendrerit maximus'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '12 - Nulla viverra sem dui, et efficitur quam pretium a',
				description: 'Nam non maximus erat, ac rhoncus massa'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '13 - Lorem ipsum',
				description: ' Ut gravida, tortor eget ultrices pulvinar, purus erat egestas metus, eget feugiat justo purus ac diam'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '14 - Ut gravida, tortor eget ultrices pulvinar, purus erat egestas metus, eget feugiat justo purus ac diam',
				description: 'Dolor sit amet'
			},
			{
				image: 'http://lorempixel.com/150/150/abstract/?' + Math.random(),
				title: '15 - Pellentesque quis dolor eget sem hendrerit maximus',
				description: 'Suspendisse eget eleifend urna. Morbi a est lacus'
			}
		];
	}

})();
