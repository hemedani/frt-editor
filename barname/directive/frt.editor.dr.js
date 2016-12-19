(function () {
	'use strict';
	angular.module('frtEditor', [])
		.directive('frtEditor', frtEditor);

	function frtEditor() {

		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'barname/html/frt.editor.tmd.html',
			scope: {
				ngPattern: '@',
				ngChange: '&ngChange',
				ngRequired: '=',
				ngMinlength: '=',
				ngMaxlength: '=',
				ngTrim: '=',
				ngModel: '='
			},
			compile: compile
		};

		function compile() {

			return {
				post: function (scope, element, attrs) {
					scope.iframeT = element.find('iframe');
					scope.iframeT0 = element.find('iframe')[0];
					scope.texFi = element.find('textarea');
					scope.ghabevirayesh = element.find('ghabevirayesh');
					// console.log( element.find( 'iframe' ) );
					// console.log( scope.texFi );
					// console.log( 'iframeT :-> ', document.getElementById('richtextfield') );

					scope.iframeT0.contentDocument.designMode = 'on';

					// console.log( 'iframe contents :-> ', scope.iframeT.contents().find( 'head' ) );

					var styleIframe =
						// فونت فارسی وزیر
						'<link href="https://cdn.rawgit.com/rastikerdar/vazir-font/v4.4.0/dist/font-face.css" rel="stylesheet" type="text/css" />' +

						// فونت (قلم) فارسی شبنم
						'<link href="https://cdn.rawgit.com/rastikerdar/shabnam-font/v1.0.2/dist/font-face.css" rel="stylesheet" type="text/css" />' +

						// فونت (قلم) فارسی گندم
						'<link href="https://cdn.rawgit.com/rastikerdar/gandom-font/v0.4.4/dist/font-face.css" rel="stylesheet" type="text/css" />' +

						// فونت (قلم) فارسی تنها
						'<link href="https://cdn.rawgit.com/hemedani/tanha-font/v0.3.0/font-face.css" rel="stylesheet" type="text/css" />' +

						// فونت فارسی ساحل
						'<link href="https://cdn.rawgit.com/rastikerdar/sahel-font/v1.0.0-alpha6/dist/font-face.css" rel="stylesheet" type="text/css" />' +

						// سی اس اس هایی که برای خوده ایفریم احتیاج هست
						'<style type=\'text/css\'>' +
						' body {direction:rtl;background-color: rgba(255,255,228,0.5);padding:0.5rem 1rem;font-family: \'Vazir\', sans-serif;} .teamamaks {width:100%}' +
						' .h_iframe-aparat_embed_frame{position:relative;}' +
						' .h_iframe-aparat_embed_frame .ratio {display:block;width:100%;height:auto;}' +
						' .h_iframe-aparat_embed_frame iframe {position:absolute;top:0;left:0;width:100%; height:100%;}' +

						// سی اس اس های بلوک کوت یا اظهارنظرها
						'blockquote{position:relative;width:100%;height:auto;margin:2rem auto 0 auto;color:#edf0f9;overflow:visible}' +
						'blockquote img{width:5.5rem;height:5.5rem;border-radius:50%;position:absolute;top:-1.5rem;right:1rem;z-index:2}' +
						'blockquote .esm-block{padding:.1rem 2rem .1rem .5rem;background-color:#6e7480;font-size:.8rem;' +
						'position:absolute;top:.4rem;right:5rem;z-index:1}' +
						'blockquote .semat-block{padding:.1rem 3rem .1rem .5rem;background-color:#6e7480;' +
						'font-size:.8rem;position:absolute;top:2rem;right:4rem;z-index:1}' +
						'blockquote .matn-block{background-color:#2b2d32;padding:5.5rem 1.8rem 1rem 1rem}' +
						'blockquote .matn-block:before{content:\'\';position:absolute;right:1rem;top:5.2rem;border-right:2px solid #6e7480;height:calc(100% - 5.8rem)}' +

						' </style>';

					// استایل هایی که میخوایم رو با این خط به آیفریم اضافه میکنیم
					scope.iframeT.contents()
						.find('head')
						.append(styleIframe);

					// اگر از دایرکتیو برای ویرایش استفاده شد و مطلبی از قبل توش وجود داشت اون رو به بادی ایفرم اضافه میکنه
					if (scope.ngModel) {
						scope.iframeT.contents()
							.find('body')
							.append(scope.ngModel);
					}

					scope.nemayesh = function (v) {
						switch (v) {
							case 'txa':
								// console.log( 'tick txa' );
								scope.texFi.toggleClass('roshan');
								break;
							case 'faal':
								if (scope.iframeT0.contentDocument.designMode === 'off') {
									scope.iframeT0.contentDocument.designMode = 'on';

									scope.iframeT.contents()
										.find('head')
										.append(styleIframe);

									if (scope.ngModel) {
										scope.iframeT.contents()
											.find('body')
											.append(scope.ngModel);
									}
								}
								console.log('faal Iframe> ', scope.iframeT0.contentDocument.designMode);
								break;
							case 'video':
								// console.log( 'tick vid' );
								// console.log('query selector :-> ', element[0].querySelector('#video'));
								// console.log('element find by id :-> ', angular.element('video'));
								// var vid = element[0].querySelector('#video');
								// vid.toggleClass('roshan');
								// angular.element(document.querySelector('#video')).toggleClass( 'roshan' );
								element.find('frt-video').toggleClass('roshan');
								element.find('frt-aks').removeClass('roshan');
								element.find('frt-aksbk').removeClass('roshan');
								element.find('frt-font').removeClass('roshan');
								element.find('frt-link').removeClass('roshan');
								element.find('frt-block').removeClass('roshan');
								element.find('frt-fontsize').removeClass('roshan');
								break;
							case 'aks':
								// console.log( 'tick aks' );
								element.find('frt-aks').toggleClass('roshan');
								element.find('frt-aksbk').removeClass('roshan');
								element.find('frt-video').removeClass('roshan');
								element.find('frt-font').removeClass('roshan');
								element.find('frt-link').removeClass('roshan');
								element.find('frt-block').removeClass('roshan');
								element.find('frt-fontsize').removeClass('roshan');
								break;
							case 'aksbk':
								// console.log( 'tick aks' );
								element.find('frt-aksbk').toggleClass('roshan');
								element.find('frt-aks').removeClass('roshan');
								element.find('frt-video').removeClass('roshan');
								element.find('frt-font').removeClass('roshan');
								element.find('frt-link').removeClass('roshan');
								element.find('frt-block').removeClass('roshan');
								element.find('frt-fontsize').removeClass('roshan');
								break;
							case 'font':
								// console.log( 'tick aks' );
								element.find('frt-font').toggleClass('roshan');
								element.find('frt-video').removeClass('roshan');
								element.find('frt-aksbk').removeClass('roshan');
								element.find('frt-aks').removeClass('roshan');
								element.find('frt-link').removeClass('roshan');
								element.find('frt-block').removeClass('roshan');
								element.find('frt-fontsize').removeClass('roshan');
								break;
							case 'link':
								// console.log( 'tick aks' );
								element.find('frt-link').toggleClass('roshan');
								element.find('frt-font').removeClass('roshan');
								element.find('frt-video').removeClass('roshan');
								element.find('frt-aksbk').removeClass('roshan');
								element.find('frt-aks').removeClass('roshan');
								element.find('frt-block').removeClass('roshan');
								element.find('frt-fontsize').removeClass('roshan');
								break;
							case 'blokQ':
								// console.log( 'tick aks' );
								element.find('frt-block').toggleClass('roshan');
								element.find('frt-link').removeClass('roshan');
								element.find('frt-font').removeClass('roshan');
								element.find('frt-video').removeClass('roshan');
								element.find('frt-aksbk').removeClass('roshan');
								element.find('frt-aks').removeClass('roshan');
								element.find('frt-fontsize').removeClass('roshan');
								break;
							case 'size':
								// console.log( 'tick aks' );
								element.find('frt-fontsize').toggleClass('roshan');
								element.find('frt-block').removeClass('roshan');
								element.find('frt-link').removeClass('roshan');
								element.find('frt-font').removeClass('roshan');
								element.find('frt-video').removeClass('roshan');
								element.find('frt-aksbk').removeClass('roshan');
								element.find('frt-aks').removeClass('roshan');
								break;
						}
					};

					scope.baste = function () {
						element.find('frt-block').removeClass('roshan');
						element.find('frt-link').removeClass('roshan');
						element.find('frt-font').removeClass('roshan');
						element.find('frt-video').removeClass('roshan');
						element.find('frt-aksbk').removeClass('roshan');
						element.find('frt-aks').removeClass('roshan');
					};

					// زیختن مقدار ایفریم در انجی مادل با هر بار فشردن دکمه های کیبرد
					scope.iframeT.contents()
						.bind('keyup', function () {
							// console.log( 'tick' );
							scope.$apply(function () {
								scope.texFi.val(scope.iframeT.contents()[0].body.innerHTML);
								scope.ngModel = scope.iframeT.contents()[0].body.innerHTML;
							});
						});

					scope.dastorat = {
						// دستوراتی که برای نوشته هاست
						vasNev: [{
							neveshte: 'د',
							tooltip: 'درشت (Bold)',
							dastor: 'bold'
						}, {
							neveshte: 'ا',
							tooltip: 'ایتالیک (italic)',
							dastor: 'italic'
						}, {
							neveshte: 'خ ز',
							tooltip: 'خط زیر (Underline)',
							dastor: 'underline'
						}, {
							neveshte: 'خ ا',
							tooltip: 'خط افقی (HorizontalRule)',
							dastor: 'insertHorizontalRule'
						}, {
							neveshte: 'ل ش',
							tooltip: 'لیست شماره ای (OrderedList)',
							dastor: 'insertOrderedList'
						}, {
							neveshte: 'ل ب',
							tooltip: 'لیست بی شماره ای (UnorderedList)',
							dastor: 'insertUnorderedList'
						}, {
							neveshte: 'ر چ',
							tooltip: 'راست چین (justifyRight)',
							dastor: 'justifyRight'
						}, {
							neveshte: 'چ چ',
							tooltip: 'چپ چین (justifyLeft)',
							dastor: 'justifyLeft'
						},  {
							neveshte: 'و چ',
							tooltip: 'وسط چین (justifyCenter)',
							dastor: 'justifyCenter'
						},  {
							neveshte: 'ت ص',
							tooltip: 'تمام صفحه (justifyFull)',
							dastor: 'justifyFull'
						}, {
							neveshte: 'پ',
							tooltip: 'پاک کردن قالب بندی (removeFormat)',
							dastor: 'removeFormat'
						}, {
							neveshte: 'آن',
							tooltip: 'زدودن لینک (unlink)',
							dastor: 'unlink'
						}],

						// دستوراتی که برای دگمه هاست
						vasDogm: [{
							dastor: 'aks',
							esm: 'عکس'
						}, {
							dastor: 'aksbk',
							esm: 'عکس۲'
						}, {
							dastor: 'video',
							esm: 'آپارات'
						}, {
							dastor: 'font',
							esm: 'فونت'
						}, {
							dastor: 'size',
							esm: 'اندازه'
						}, {
							dastor: 'blokQ',
							esm: 'نظر'
						}, {
							dastor: 'link',
							esm: 'لینک'
						}, {
							dastor: 'txa',
							esm: 'کدها'
						}],
						// دستوراتی که برای دگمه هاست
						// dasinp: [ {
						// 	esmtag: 'video',
						// 	model: 'vimodel',
						// 	dastor: 'insertHTML',
						// 	modeldastor: scope.vimodel
						// }, {
						// 	esmtag: 'aks',
						// 	model: 'aksmodel',
						// 	dastor: 'insertImage',
						// 	modeldastor: 'aksmodel'
						// }, {
						// 	esmtag: 'aksbk',
						// 	model: 'aksmodelkellas',
						// 	dastor: 'insertImage',
						// 	modeldastor: 'aksbakellas'
						// }, {
						// 	esmtag: 'link',
						// 	model: 'linmodel',
						// 	dastor: 'createLink',
						// 	modeldastor: 'linmodel'
						// } ],

						// فونت هایی که در دایرکتیو استفاده میکنیم
						fontha: [{
							dastor: 'Vazir',
							esm: 'وزیــــر'
						}, {
							dastor: 'Shabnam',
							esm: 'شبنــــم'
						}, {
							dastor: 'Gandom',
							esm: 'گنـــــدم'
						}, {
							dastor: 'Tanha',
							esm: 'تنهــــا'
						}, {
							dastor: 'Sahel',
							esm: 'ساحـــل'
						}, ],

						sizaha: [{
							dastor: '1'
						}, {
							dastor: '2'
						}, {
							dastor: '3'
						}, {
							dastor: '4'
						}, {
							dastor: '5'
						}, {
							dastor: '6'
						}, {
							dastor: '7'
						} ]
					};

					// scope.$watch( 'vimodel', function( newValue, oldValue ) {
					// 	console.log( 'vim model watch :-> ', newValue );
					// } );

					scope.execIn = function (cmd, val) {

						// معادل قرار دادن مقادیر اچ تی ام ال  برای اینزرت های سفارشی خودمان
						// scope.aksbakellas = '<img class="teamamaks" src="' + scope.aksmodelkellas + '" >';
						if (scope.aksbakellas) {
							val = '<img class="teamamaks" src="' + scope.aksbakellas + '" >';
						}

						//  درست کردن آیفریم آپارات با لینک ویدئو
						if (scope.vimodel) {

							var videnc = scope.vimodel.split('/v/')[1];

							val = '<div class="h_iframe-aparat_embed_frame"> <span style="display: block;padding-top: 57%"></span>' +
								'<iframe src="https://www.aparat.com/video/video/embed/videohash/' +
								videnc +
								'/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>';
						}

						if ((scope.aksblmodel) && (scope.esmblmodel) && (scope.sematblmodel) && (scope.matnblmodel)) {

							console.log('nazar vojod dare!!');

							val = '<blockquote><img src="' +
								scope.aksblmodel +
								'"/><span class="esm-block">' +
								scope.esmblmodel +
								'</span><span class="semat-block">' +
								scope.sematblmodel +
								'</span><div class="matn-block">' +
								scope.matnblmodel +
								'</div></blockquote>';

						}

						console.log('cmd val :->', cmd + ' | ' + val);

						// اجرای دستور
						scope.iframeT0.contentDocument.execCommand(cmd, null, val);

						// ریختن کدهای ساخته شده در تکس اریا و قراردادن مقدار تکس اریا در مدل اصلی
						scope.texFi.val(scope.iframeT.contents()[0].body.innerHTML);
						scope.ngModel = scope.iframeT.contents()[0].body.innerHTML;

						// خالی کردن مقدار مدل فیلدهای عکس، ویدیو و ...
						scope.aksmodel = '';
						scope.aksmodelkellas = '';
						// scope.htmodel = '';
						scope.vimodel = '';
						scope.linmodel = '';
						scope.aksblmodel = '';
						scope.esmblmodel = '';
						scope.sematblmodel = '';
						scope.matnblmodel = '';
						scope.aksbakellas = '';

						// بستن فیلدهایی که برای وارد کردن مدل ها باز شدن بودند مثل عکس
						element.find('frt-video').removeClass('roshan');
						element.find('frt-aks').removeClass('roshan');
						element.find('frt-aksbk').removeClass('roshan');
						element.find('frt-link').removeClass('roshan');
						element.find('frt-block').removeClass('roshan');

					};
				}
			};

		}
	}
})();
