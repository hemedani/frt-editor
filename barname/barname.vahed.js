( function () {
	'use strict';

	angular.module( 'barname', [

			//vahed haye ketabkhanehaye dige
			'ui.router',
			'angular-loading-bar',
			'ngSanitize',
			'ngAnimate',

			// directive HA
			'frtEditor',

			//vahed haye safahat site
			'barname.khane',
			'barname.nahve',
			'barname.mali',
			'barname.link',
			'barname.tose',

		] )
		.config( tanzimBarname );

	function tanzimBarname( $locationProvider, $urlRouterProvider) {

		$urlRouterProvider.when( '', '/khane' );
		$urlRouterProvider.otherwise( '/khane' );

		// $locationProvider.html5Mode( true );

	}

}() );
