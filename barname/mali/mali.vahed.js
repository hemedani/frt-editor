( function () {
	'use strict';

	angular.module( 'barname.mali', [] )
		.config( tanzimMali );

	function tanzimMali( $stateProvider ) {
		$stateProvider.state( 'mali', {
			url: '/mali',
			templateUrl: 'barname/html/mali.ghaleb.html',
			controller: 'maliCtrl',
			controllerAs: 'mn'
		} );
	}

}() );
