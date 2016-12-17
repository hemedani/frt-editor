( function () {
	'use strict';

	angular.module( 'barname.khane', [] )
		.config( tanzimKhane );

	function tanzimKhane( $stateProvider ) {
		$stateProvider.state( 'khane', {
			url: '/khane',
			templateUrl: 'barname/html/khane.ghaleb.html',
			controller: 'khaneCtrl',
			controllerAs: 'mn'
		} );
	}

}() );
