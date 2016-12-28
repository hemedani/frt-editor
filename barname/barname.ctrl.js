( function () {
	'use strict';

	angular.module( 'barname' )
		.controller( 'asliCtrl', asliCtrl );

	function asliCtrl( $rootScope, $scope, $window ) {

		/*jshint validthis: true */
		// var mna = this;

		var el = document.getElementsByClassName( 'meni-item' );
		var menuEL = document.getElementById( 'navmenu' );
		var bodyEL = document.getElementById( 'laf-asli' );

		// console.log( el );

		$rootScope.$on( '$stateChangeSuccess', function () {
			$window.scrollTo( 0, 0 );
			for ( var i = 0; i < el.length; i++ ) {
				el[ i ].classList.remove( 'nemayesh-bede' );
			}
		} );

		$window.addEventListener( 'scroll', function () {
			if ( $window.pageYOffset > 115 ) {
				bodyEL.classList.add( 'bodyfasballa' );
				menuEL.classList.add( 'sticky' );
			} else {
				bodyEL.classList.remove( 'bodyfasballa' );
				menuEL.classList.remove( 'sticky' );
			}
		} );

		$scope.bazmenu = function () {
			// el.forEach(classList.toggle('in-view'));
			// el.classList.toggle('in-view');
			for ( var i = 0; i < el.length; i++ ) {
				el[ i ].classList.toggle( 'nemayesh-bede' );
			}
		};

		$scope.menuha = [
			{
				state: 'khane',
				name: 'خانه'
			},
			{
				state: 'nahve',
				name: 'نحوه استفاده'
			},
			{
				state: 'tose',
				name: 'توسعه دهندگان'
			},
			{
				state: 'mali',
				name: 'کمک مالی'
			},
			{
				state: 'link',
				name: 'لینک های مفید'
			}
		];

	}
}() );
