( function () {
	'use strict';

	angular.module( 'barname', [

			//vahed haye ketabkhanehaye dige
			'ui.router',
			'angular-loading-bar',
			'ngSanitize',
			'ngAnimate',

			// directive HA
			'barname.frtEditor',

			//vahed haye safahat site
			'barname.khane',

		] )
		.config( tanzimBarname );

	function tanzimBarname( $locationProvider, $urlRouterProvider) {

		$urlRouterProvider.when( '', '/khane' );
		$urlRouterProvider.otherwise( '/khane' );

		// $locationProvider.html5Mode( true );

	}

}() );
