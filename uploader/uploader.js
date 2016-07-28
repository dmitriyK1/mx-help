(function () {
	'use strict';

	angular.module('app').controller('UploaderController', UploaderController);

	UploaderController.$inject = ['$timeout', '$http'];

	function UploaderController($timeout, $http) {
		var vm = this;

		vm.makeUploadUrl = function (file) {
			return 'http://localhost/m42Services/api/filestorage/add?entity=SPSActivityTypeIncident&objectId=951BB318-7523-4CD7-ADCC-F74F00D44962&fileName=' + file.name;
		};

		var config = {
			headers: {
				'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IklTTV9OVFxcbWFiZHVyYXNoaWRvdiIsImlzcyI6Ii8iLCJhdWQiOiI1Mzc3Yjc1YjM5Y2E0N2RmODBiNzhhOThiMThiOTIwZSIsImV4cCI6MTQ1ODY2OTg2NCwibmJmIjoxNDU2NTk2MjY0fQ.6lUjmjVRhS_yo9lDbU-kXW0EnL8CM6GRAcJvXw9lbas'
			}
		};

		vm.headers = config.headers;

		vm.files2 = [];
		$http.get('http://localhost/m42Services/api/filestorage/SPSActivityTypeIncident/951bb318-7523-4cd7-adcc-f74f00d44962', config)
			.then(function (result) {
				//console.log(result.data[0]);
				vm.files2 = result.data.map(function (item) {
					return {
						name: item.Name,
						url: 'api/filestorage/' + item.Id,
						size: item.Size,
						uploaded: new Date(item.UploadedOn),

						thumbnail: item.Thumbnail !== null ? item.Thumbnail : undefined
					};
				});
			});

		/*var xz = [
		 {name: 'Example1.png', url: 'files/Example1.png'},
		 {name: 'Example1.pdf', url: 'files/Example1.pdf'},
		 {name: 'Example1.txt', url: 'flies/Example1.txt'},
		 {name: 'Example1.mp4', url: 'files/Example1.mp4'},
		 {name: 'File with long name which is called Example2.txt', url: 'flies/Example2.txt'},
		 {name: 'Example2.jpg', url: 'files/Example2.jpg'},
		 {name: 'Example3.jpg', url: 'files/Example3.jpg'},
		 {name: 'Example3.txt', url: 'flies/Example3.txt'},
		 {name: 'Example4.txt', url: 'flies/Example4.txt'},
		 {name: 'Example5.txt', url: 'flies/Example5.txt'},
		 {name: 'Example6.txt', url: 'flies/Example6.txt'},
		 {name: 'Example7.txt', url: 'flies/Example7.txt'},
		 {name: 'Example8.txt', url: 'flies/Example8.txt'},
		 {name: 'Example9.txt', url: 'flies/Example9.txt'},
		 {name: 'Example10.txt', url: 'flies/Example10.txt'},
		 {name: 'Example11.txt', url: 'flies/Example11.txt'},
		 {name: 'Example12.txt', url: 'flies/Example12.txt'},
		 {name: 'Example13.txt', url: 'flies/Example13.txt'}
		 ];
		 */
		vm.formatUrl = function (url) {
			return 'http://localhost/m42Services/' + url;
		};

		vm.onDelete = function (file) {

			$timeout(function () {
				var index = vm.files2.indexOf(file);
				if (index > -1) {
					vm.files2.splice(index, 1);
				}
			});


			//alert('deleting... ' + JSON.stringify(file));
		};
	}

})();
