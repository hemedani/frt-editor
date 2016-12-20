( function () {
	'use strict';

	angular.module( 'barname.link', [] )
		.config( tanzimLink );

	function tanzimLink( $stateProvider ) {
		$stateProvider.state( 'link', {
			url: '/link',
			templateUrl: 'barname/html/link.ghaleb.html',
			controller: 'linkCtrl',
			controllerAs: 'mn'
		} );
	}

}() );
