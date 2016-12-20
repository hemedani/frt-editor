( function () {
	'use strict';

	angular.module( 'barname.tose', [] )
		.config( tanzimTose );

	function tanzimTose( $stateProvider ) {
		$stateProvider.state( 'tose', {
			url: '/tose',
			templateUrl: 'barname/html/tose.ghaleb.html',
			controller: 'toseCtrl',
			controllerAs: 'mn'
		} );
	}

}() );
