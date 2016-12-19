var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' ).create();
var del = require( 'del' );
var autoprefixer = require( 'autoprefixer' );
var tanzim = require( './gulp.tanzim' )();

var p$ = require( 'gulp-load-plugins' )();

gulp.task( 'bekar-tose', [ 'jade', 'tazrigh' ], function () {

	shoroBroserSync();

} );

gulp.task( 'pak', function ( done ) {
	var tamizTanzim = [].concat( tanzim.tolid, tanzim.movaghat, tanzim.tolidSite );
	sabt( 'Pak mikonim: ' + p$.util.colors.blue( tamizTanzim ) );
	del( tamizTanzim, done );
} );

//tasavir ro vadarshtam bayyad baadan be dependhash ezafe konam
gulp.task( 'tolid-site', [ 'behinesazi-site', 'copy-html' ], function () {
	sabt( 'Darim Posheye Tolid ro Misazim' );

	var pyg = {
		title: 'gulp tolid',
		subtitle: 'posheye-site dorost shod',
		massage: 'halla mitonid posheye tolid-site ro be server asli ersal konid',
	};
	sabt( pyg );
} );

gulp.task( 'tolid-dr', [ 'behinesazi-dr' ], function () {
	sabt( 'Darim Posheye Tolid ro Misazim' );

	var pyg = {
		title: 'gulp tolid',
		subtitle: 'posheye tolid dorost shod',
		massage: 'halla mitonid posheye tolid be server asli ersal konid',
	};
	del( tanzim.movaghat );
	sabt( pyg );
} );

gulp.task( 'tasavir', [ 'pak-tasavir' ], function () {
	sabt( 'darim aksharo copy to shakhe tolid copy mikonim' );
	return gulp
		.src( tanzim.tasavir )
		.pipe( p$.imagemin() )
		.pipe( gulp.dest( tanzim.tolidSite + 'tasv' ) );
} );

gulp.task( 'pak-tasavir', function () {
	sabt( 'darim aksharo az to shakhe tolid pak mikonim' );
	tamiz( tanzim.tolidSite + 'tasv' );
} );

gulp.task( 'copy-html', [ 'jade' ], function () {
	sabt( 'darim ghalebha to shakhe tolid copy mikonim' );
	return gulp
		.src( tanzim.htmltemplates )
		.pipe( gulp.dest( tanzim.tolidSite + 'barname/html' ) );
} );

gulp.task( 'templatecache-site', [ 'jade' ], function () {
	sabt( 'Creating an AngularJS $templateCache' );

	return gulp
		.src( tanzim.htmltemplates )
		.pipe( p$.angularTemplatecache(
			tanzim.templateCache.file,
			tanzim.templateCache.gozineha
		) )
		.pipe( gulp.dest( tanzim.movaghat ) );
} );

gulp.task( 'templatecache-dr', [ 'jade' ], function () {
	sabt( 'Creating an AngularJS $templateCache' );

	return gulp
		.src( tanzim.frthtmltmp )
		.pipe( p$.angularTemplatecache(
			tanzim.templateCache.file,
			tanzim.templateCache.gozineha
		) )
		.pipe( gulp.dest( tanzim.movaghat ) );
} );

gulp.task( 'behinesazi-site', [ 'tazrigh', 'templatecache-site' ], function () {

	// TODO:0 doros kardan filesh ta binim chi mishe
	sabt( 'Darim javascript, css va html ro behinesazi mikonim' );
	// var assets = p$.useref.assets();
	var templateCache = tanzim.movaghat + tanzim.templateCache.file;
	var cssFilter = p$.filter( [ '**/*.css' ], {
		restore: true,
	} );
	var jsKetabFilter = p$.filter( [ '**/ketab.js' ], {
		restore: true,
	} );
	var jsNarmFilter = p$.filter( [ '**/narm.js' ], {
		restore: true,
	} );
	var jsCssFilter = p$.filter( [ '**/*.js', '**/*.css' ], {
		restore: true,
	} );

	return gulp
		.src( tanzim.index )
		.pipe( p$.plumber() )
		.pipe( p$.inject( gulp.src( templateCache, {
			read: false,
		} ), {
			starttag: '<!-- inject:templateha:js -->',
			relative: true,
		} ) )
		.pipe( p$.useref() )
		.pipe( cssFilter )
		.pipe( p$.csso() )
		.pipe( cssFilter.restore )
		.pipe( jsKetabFilter )
		.pipe( p$.uglify() )
		.pipe( jsKetabFilter.restore )
		.pipe( jsNarmFilter )
		.pipe( p$.ngAnnotate() )
		.pipe( p$.uglify() )
		.pipe( jsNarmFilter.restore )
		.pipe( jsCssFilter )
		.pipe( p$.rev() )
		.pipe( p$.useref() )
		.pipe( jsCssFilter.restore )
		.pipe( p$.revReplace() )
		.pipe( p$.prefix( 'frt-editor/' ) )
		.pipe( gulp.dest( tanzim.tolidSite ) );
} );

gulp.task( 'behinesazi-dr', [ 'styl', 'templatecache-dr' ], function () {

	sabt( 'Darim javascript, css va html ro behinesazi-dr mikonim' );
	var cssFilter = p$.filter( [ '**/*.css' ], {
		restore: true,
	} );
	var jsFilter = p$.filter( [ '**/*.js' ], {
		restore: true,
	} );

	return gulp
		.src( tanzim.frtjscss )
		.pipe( p$.plumber() )
		.pipe( cssFilter )
		.pipe( p$.csso() )
		.pipe( p$.concat( 'frt-editor.css' ) )
		.pipe( cssFilter.restore )
		.pipe( jsFilter )
		.pipe( p$.concat( 'frt-editor.js' ) )
		.pipe( p$.ngAnnotate() )
		.pipe( p$.uglify() )
		.pipe( jsFilter.restore )
		.pipe( gulp.dest( tanzim.tolid ) );
} );

gulp.task( 'styl', [ 'pak-styl' ], function () {
	var proc = [
		autoprefixer( {
			browsers: [ 'last 2 versions' ]
		} )
	];
	sabt( 'tabdil filehaye stylus be css va barresi o ezaf kardan prefixHa' );
	return gulp.src( tanzim.stylIndex )
		.pipe( p$.plumber() )
		.pipe( p$.stylus( {
			compress: false
		} ) )
		.pipe( gulp.dest( tanzim.movaghat ) )
		.pipe( browserSync.stream() );
} );

gulp.task( 'pak-styl', function () {
	var fileha = tanzim.movaghat + '**/*.css';
	tamiz( fileha );
} );

gulp.task( 'pak-jade', function () {
	var fileha = tanzim.htmltemaghsad + '**/*.html';
	tamiz( fileha );
} );

gulp.task( 'jade', [ 'pak-jade' ], function () {
	return gulp
		.src( tanzim.jade )
		.pipe( p$.plumber() )
		.pipe( p$.jade() )
		.pipe( p$.flatten() )
		.pipe( gulp.dest( tanzim.htmltemaghsad ) );
} );

gulp.task( 'wiredep', function () {
	var gozineHa = tanzim.begiGoziheHayePishfarzWiredep();
	var wiredep = require( 'wiredep' ).stream;
	return gulp
		.src( tanzim.index )
		.pipe( wiredep( gozineHa ) )
		.pipe( p$.inject( gulp.src( tanzim.js ), {
			relative: true,
		} ) )
		.pipe( gulp.dest( tanzim.karbar ) );
} );

gulp.task( 'tazrigh', [ 'wiredep', 'styl' ], function () {
	sabt( 'Darim filehaye css va js ro be dakhele html tazrigh mikonim' );
	return gulp
		.src( tanzim.index )
		.pipe( p$.inject( gulp.src( tanzim.css ), {
			relative: true,
		} ) )
		.pipe( gulp.dest( tanzim.karbar ) );
} );

gulp.task( 'default', [ 'bekar-tose' ] );

//  +++++++ Tavabe +++++++++

function shoroBroserSync() {

	var gozinehash = {
		port: 8800,
		server: {
			baseDir: './'
		},
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		},
		injectChanges: true,
		logFileChanges: true,
		logLevel: 'info',
		logPrefix: 'BroSync-Mige : ',
		notify: true,
		// browser: 'chromium-browser',
		reloadDelay: 500
	};

	browserSync.init( gozinehash );

	gulp.watch( tanzim.stylus, [ 'styl' ] );
	gulp.watch( tanzim.jade, [ 'jade' ] );
	gulp.watch( '**/*.html' ).on( 'change', browserSync.reload );
	gulp.watch( tanzim.tamamejs ).on( 'change', browserSync.reload );

}

function tamiz( masir, done ) {
	sabt( 'darim pak mikonim -> ' + p$.util.colors.green( masir ) );
	del( masir, done );
}

function sabt( peygham ) {
	if ( typeof ( peygham ) === 'object' ) {
		for ( var item in peygham ) {
			if ( peygham.hasOwnProperty( item ) ) {
				p$.util.log( p$.util.colors.green( peygham[ item ] ) );
			}
		}
	} else {
		p$.util.log( p$.util.colors.green( peygham ) );
	}
}
