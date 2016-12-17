(function () {
	'use strict';
	angular.module('barname.khane')
		.controller('khaneCtrl', khaneCtrl);

	function khaneCtrl($state, $sce, $scope) {

		/*jshint validthis: true */
		var mn = this;

		mn.matnkamel = '<b>in matn Azmayeshi ast</b>';

		mn.matnnemayesh = $sce.trustAsHtml( mn.matnkamel );

		$scope.$watch('mn.matnkamel', function (newValue, oldValue, scope) {
			// console.log('watch matn az khaneCtrl>', newValue);
			mn.matnnemayesh = $sce.trustAsHtml( newValue );
		})

	}
} ());
