module.exports = function() {

	var samteKarbar = './';
	var barname = './barname/';
	var mvg = './mvg/';

	var desktop = process.env.XDG_CURRENT_DESKTOP;

	var tanzim = {
		/*
		Tamame Addressha
		*/

		tamamejs: barname + '**/*.js',
		tolid: './tolid/',
		tolidSite: './docs/',
		karbar: samteKarbar,
		css: mvg + '*.css',
		fonts: samteKarbar + 'fonts/**/*.*',
		htmltemplates: barname + 'html/**/*.html',

		frthtmltmp: barname + 'html/frt.editor.tmd.html',
		frtjscss: [
			barname + 'directive/frt.editor.dr.js',
			mvg + 'templateha.js',
			mvg + 'index-dr.css'
		],

		tourmajazi: samteKarbar + 'Tour-Majazi/**/*.*',
		htmltemaghsad: barname + 'html/',
		tasavir: samteKarbar + 'tasv/**/*.*',
		index: samteKarbar + 'index.html',
		jade: barname + '**/*.jade',
		js: [
			barname + '**/*.vahed.js',
			barname + '**/*.js'
		],
		json: samteKarbar + 'dade.json',
		stylus: samteKarbar + 'style/**/*.styl',
		stylIndex: samteKarbar + 'style/ind/*.styl',
		movaghat: mvg,
		templateAdrreess: mvg + 'templateha.js',
		/**
		 * template cache
		 */
		templateCache: {
			file: 'templateha.js',
			gozineha: {
				module: 'frtEditor',
				standAlone: false,
				root: 'barname/html/'
			}
		},
		/**
		 * browserSync
		 */
		takhirBazneshaniMororgar: 3000,

		/**
		 * mahale bower va NPM
		 */

		bower: {
			json: require(samteKarbar + 'bower.json'),
			directory: samteKarbar + 'bower_components/'
		},

	};

	tanzim.begiGoziheHayePishfarzWiredep = function() {
		var gozineHa = {
			bowerJson: tanzim.bower.json,
			directory: tanzim.bower.directory,
			devDependencies: true
		};
		return gozineHa;
	};

	tanzim.browserBarayeBrowserSync = function() {
		if (desktop === 'GNOME' || 'gnome') {
			return 'chromium-browser';
		}	else if (desktop === 'Unity') {
			return 'chromium-browser';
		} else {
			return 'chromium-browser';
		}
	};

	return tanzim;

};
