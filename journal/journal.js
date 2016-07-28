(function () {
	'use strict';

	angular.module('app').controller('JournalController', JournalController);

	JournalController.$inject = ['$q', '$timeout'];

	function JournalController($q, $timeout) {
		var vm = this;

		vm.getData = function (start, count) {
			//emulate load more items
			return getDataMock(start, count).map(function (item) {
				return {
					userId: item.user,
					userName: item.userName,
					text: item.text,
					created: item.created,
					photo: item.ico
				};
			});
		};


		vm.getImage = function (photo) {
			return photo || '';
		};

		vm.onAddComment = function () {
			var defer = $q.defer();
			$timeout(function () {
				defer.resolve();
			}, 1000);
			return defer.promise;
		};


		function getDataMock(start, count) {


			var data = [
				{
					user: 'douglas crockford', userName: 'Douglas Crockford',
					text: 'If the judge approves the settlement, which we won\'t know for at least a few weeks, those included in the class action suits - ' +
					'passengers who rode with Uber between Jan. 1, 2013 and Jan. 31, 2016 - will be notified by email and given the option to be paid via credit card ' +
					'or their rider account.', ico: '', created: new Date(2015, 7, 21, 12, 43, 43, 0)
				},
				{
					user: 'hanna smith', userName: 'Hanna Smith',
					text: 'This comes shortly after Uber offered to pay a $28.5 million settlement over its Safe Ride Fee class action lawsuit. ',
					ico: './images/EmptyUserFemale.png', created: new Date(2015, 7, 24, 19, 3, 18, 0)
				},
				{
					user: 'douglas crockford', userName: 'Douglas Crockford',
					text: '<p>WASHINGTON - The day began with extended and sometimes wry reflections from Chief Justice John G. Roberts Jr. on the life and work of ' +
					'Justice Antonin Scalia, whose empty chair at the Supreme Court was draped in black. It ended with a liberal justice invoking events in Ferguson, ' +
					'Mo., and accusing a conservative colleague of being ignorant of facts in a case that could lead to "a police state." </p> <p>Justice Scalia\'s ' +
					'death has upended the court\'s work, withdrawing an important voice and often crucial vote from the contentious docket his remaining eight colleagues ' +
					'face in coming months in cases on abortion, immigration and religious freedom.</p> <p> It has also created a titanic struggle over who will succeed him, ' +
					'one that will play out in a divisive debate that found an echo Monday in the first arguments since Justice Scalia died on Feb. 13. ' +
					'It did not take long for the justices, who arrived solemn and somber, to show their sharp divisions. In short order, rancor seemed to replace grief.</p>',
					ico: '', created: new Date(2015, 7, 25, 9, 23, 15, 0)
				},

				{
					user: 'douglas crockford', userName: 'Douglas Crockford',
					text: '<code>slice</code> does not alter. It returns a shallow copy of elements from the original array. ' +
					'Elements of the original array are copied into the returned array as follows:' +
					'<ul><li>For object references (and not the actual object), <code>slice</code> copies object references into the new array. ' +
					'Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.</li>' +
					'<li>For strings and numbers (not <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" ' +
					'title="The String global object is a constructor for strings, or a sequence of characters."><code>String</code></a> and ' +
					'<a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" title="The Number JavaScript object is a wrapper object allowing you to work with numerical ' +
					'values. A Number object is created using the Number() constructor."><code>Number</code></a> objects), <code>slice</code> copies strings and numbers into the new ' +
					'array. Changes to the string or number in one array does not affect the other array.</li></ul>',

					ico: '', created: new Date(2015, 7, 26, 12, 43, 43, 0)
				},

				{
					user: 'hannaguanna smithandwesson', userName: 'Hannaguanna Smithandwesson',
					text: '<h1>Uber just hosted a conference</h1><p>Call regarding <b>Uber driver Jason Dalton</b>, who is suspected in the killing of six people in Kalamazoo, Michigan on ' +
					'Saturday night.</p> <p>That night, Dalton allegedly picked up Uber passengers in between shootings. ' +
					'The call, which includes Uber Chief Security Officer Joe Sullivan, and Ed Davis and Margaret Richardson of Uber\'s safety advisory board, ' +
					'has touched on background checks, the driver\'s rating, feedback system and firearms policy.</p>',
					ico: '', created: new Date(2015, 7, 27, 19, 3, 18, 0)
				},
				{
					user: 'douglas crockford', userName: 'Douglas Crockford',
					text: '<p>This comes shortly after Uber offered to pay a <b><i>$28.5 million</i></b> settlement over its Safe Ride Fee class action lawsuit. </p>',
					ico: '', created: new Date(2015, 7, 28, 9, 23, 15, 0)
				}
			];

			data = data.sort(function (a, b) {
				return a.created < b.created ? 1 : a.created > b.created ? -1 : 0;
			}).slice(start, start + count);

			return data;
		}
	}
})();
