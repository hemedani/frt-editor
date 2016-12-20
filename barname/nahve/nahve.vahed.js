( function () {
	'use strict';

	angular.module( 'barname.nahve', [] )
		.config( tanzimNahve );

	function tanzimNahve( $stateProvider ) {
		$stateProvider.state( 'nahve', {
			url: '/nahve',
			templateUrl: 'barname/html/nahve.ghaleb.html',
			controller: 'nahveCtrl',
			controllerAs: 'mn'
		} );
	}

}() );
