!function(){"use strict";function e(e,a){a.when("","/khane"),a.otherwise("/khane")}e.$inject=["$locationProvider","$urlRouterProvider"],angular.module("barname",["ui.router","angular-loading-bar","ngSanitize","ngAnimate","frtEditor","barname.khane","barname.nahve","barname.mali","barname.link","barname.tose"]).config(e)}(),function(){"use strict";function e(e){e.state("khane",{url:"/khane",templateUrl:"barname/html/khane.ghaleb.html",controller:"khaneCtrl",controllerAs:"mn"})}e.$inject=["$stateProvider"],angular.module("barname.khane",[]).config(e)}(),function(){"use strict";function e(e){e.state("link",{url:"/link",templateUrl:"barname/html/link.ghaleb.html",controller:"linkCtrl",controllerAs:"mn"})}e.$inject=["$stateProvider"],angular.module("barname.link",[]).config(e)}(),function(){"use strict";function e(e){e.state("mali",{url:"/mali",templateUrl:"barname/html/mali.ghaleb.html",controller:"maliCtrl",controllerAs:"mn"})}e.$inject=["$stateProvider"],angular.module("barname.mali",[]).config(e)}(),function(){"use strict";function e(e){e.state("nahve",{url:"/nahve",templateUrl:"barname/html/nahve.ghaleb.html",controller:"nahveCtrl",controllerAs:"mn"})}e.$inject=["$stateProvider"],angular.module("barname.nahve",[]).config(e)}(),function(){"use strict";function e(e){e.state("tose",{url:"/tose",templateUrl:"barname/html/tose.ghaleb.html",controller:"toseCtrl",controllerAs:"mn"})}e.$inject=["$stateProvider"],angular.module("barname.tose",[]).config(e)}(),function(){"use strict";function e(e,a,t){var s=document.getElementsByClassName("meni-item"),r=document.getElementById("navmenu"),o=document.getElementById("laf-asli");e.$on("$stateChangeSuccess",function(){t.scrollTo(0,0);for(var e=0;e<s.length;e++)s[e].classList.remove("nemayesh-bede")}),t.addEventListener("scroll",function(){t.pageYOffset>115?(o.classList.add("bodyfasballa"),r.classList.add("sticky")):(o.classList.remove("bodyfasballa"),r.classList.remove("sticky"))}),a.bazmenu=function(){for(var e=0;e<s.length;e++)s[e].classList.toggle("nemayesh-bede")},a.menuha=[{state:"khane",name:"خانه"},{state:"nahve",name:"نحوه استفاده"},{state:"tose",name:"توسعه دهندگان"},{state:"mali",name:"کمک مالی"},{state:"link",name:"لینک های مفید"}]}e.$inject=["$rootScope","$scope","$window"],angular.module("barname").controller("asliCtrl",e)}(),function(){"use strict";function e(){function e(){return{post:function(e,a,t){e.iframeT=a.find("iframe"),e.iframeT0=a.find("iframe")[0],e.texFi=a.find("textarea"),e.ghabevirayesh=a.find("ghabevirayesh"),e.iframeT0.contentDocument.designMode="on";var s='<link href="https://cdn.rawgit.com/rastikerdar/vazir-font/v4.4.0/dist/font-face.css" rel="stylesheet" type="text/css" /><link href="https://cdn.rawgit.com/rastikerdar/shabnam-font/v1.0.2/dist/font-face.css" rel="stylesheet" type="text/css" /><link href="https://cdn.rawgit.com/rastikerdar/gandom-font/v0.4.4/dist/font-face.css" rel="stylesheet" type="text/css" /><link href="https://cdn.rawgit.com/hemedani/tanha-font/v0.3.0/font-face.css" rel="stylesheet" type="text/css" /><link href="https://cdn.rawgit.com/rastikerdar/sahel-font/v1.0.0-alpha6/dist/font-face.css" rel="stylesheet" type="text/css" /><style type=\'text/css\'> body {direction:rtl;background-color: rgba(255,255,228,0.5);padding:0.5rem 1rem;font-family: \'Vazir\', sans-serif;} .teamamaks {width:100%} .h_iframe-aparat_embed_frame{position:relative;} .h_iframe-aparat_embed_frame .ratio {display:block;width:100%;height:auto;} .h_iframe-aparat_embed_frame iframe {position:absolute;top:0;left:0;width:100%; height:100%;}blockquote{position:relative;width:100%;height:auto;margin:2rem auto 0 auto;color:#edf0f9;overflow:visible}blockquote img{width:5.5rem;height:5.5rem;border-radius:50%;position:absolute;top:-1.5rem;right:1rem;z-index:2}blockquote .esm-block{padding:.1rem 2rem .1rem .5rem;background-color:#6e7480;font-size:.8rem;position:absolute;top:.4rem;right:5rem;z-index:1}blockquote .semat-block{padding:.1rem 3rem .1rem .5rem;background-color:#6e7480;font-size:.8rem;position:absolute;top:2rem;right:4rem;z-index:1}blockquote .matn-block{background-color:#2b2d32;padding:5.5rem 1.8rem 1rem 1rem}blockquote .matn-block:before{content:\'\';position:absolute;right:1rem;top:5.2rem;border-right:2px solid #6e7480;height:calc(100% - 5.8rem)} </style>';e.iframeT.contents().find("head").append(s),e.ngModel&&e.iframeT.contents().find("body").append(e.ngModel),e.nemayesh=function(t){switch(t){case"txa":e.texFi.toggleClass("roshan");break;case"faal":"off"===e.iframeT0.contentDocument.designMode&&(e.iframeT0.contentDocument.designMode="on",e.iframeT.contents().find("head").append(s),e.ngModel&&e.iframeT.contents().find("body").append(e.ngModel)),console.log("faal Iframe> ",e.iframeT0.contentDocument.designMode);break;case"video":a.find("frt-video").toggleClass("roshan"),a.find("frt-aks").removeClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-font").removeClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-block").removeClass("roshan"),a.find("frt-fontsize").removeClass("roshan");break;case"aks":a.find("frt-aks").toggleClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-video").removeClass("roshan"),a.find("frt-font").removeClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-block").removeClass("roshan"),a.find("frt-fontsize").removeClass("roshan");break;case"aksbk":a.find("frt-aksbk").toggleClass("roshan"),a.find("frt-aks").removeClass("roshan"),a.find("frt-video").removeClass("roshan"),a.find("frt-font").removeClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-block").removeClass("roshan"),a.find("frt-fontsize").removeClass("roshan");break;case"font":a.find("frt-font").toggleClass("roshan"),a.find("frt-video").removeClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-aks").removeClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-block").removeClass("roshan"),a.find("frt-fontsize").removeClass("roshan");break;case"link":a.find("frt-link").toggleClass("roshan"),a.find("frt-font").removeClass("roshan"),a.find("frt-video").removeClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-aks").removeClass("roshan"),a.find("frt-block").removeClass("roshan"),a.find("frt-fontsize").removeClass("roshan");break;case"blokQ":a.find("frt-block").toggleClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-font").removeClass("roshan"),a.find("frt-video").removeClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-aks").removeClass("roshan"),a.find("frt-fontsize").removeClass("roshan");break;case"size":a.find("frt-fontsize").toggleClass("roshan"),a.find("frt-block").removeClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-font").removeClass("roshan"),a.find("frt-video").removeClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-aks").removeClass("roshan")}},e.baste=function(){a.find("frt-block").removeClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-font").removeClass("roshan"),a.find("frt-video").removeClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-aks").removeClass("roshan")},e.iframeT.contents().bind("keyup",function(){e.$apply(function(){e.texFi.val(e.iframeT.contents()[0].body.innerHTML),e.ngModel=e.iframeT.contents()[0].body.innerHTML})}),e.dastorat={vasNev:[{neveshte:"د",tooltip:"درشت (Bold)",dastor:"bold"},{neveshte:"ا",tooltip:"ایتالیک (italic)",dastor:"italic"},{neveshte:"خ ز",tooltip:"خط زیر (Underline)",dastor:"underline"},{neveshte:"خ ا",tooltip:"خط افقی (HorizontalRule)",dastor:"insertHorizontalRule"},{neveshte:"ل ش",tooltip:"لیست شماره ای (OrderedList)",dastor:"insertOrderedList"},{neveshte:"ل ب",tooltip:"لیست بی شماره ای (UnorderedList)",dastor:"insertUnorderedList"},{neveshte:"ر چ",tooltip:"راست چین (justifyRight)",dastor:"justifyRight"},{neveshte:"چ چ",tooltip:"چپ چین (justifyLeft)",dastor:"justifyLeft"},{neveshte:"و چ",tooltip:"وسط چین (justifyCenter)",dastor:"justifyCenter"},{neveshte:"ت ص",tooltip:"تمام صفحه (justifyFull)",dastor:"justifyFull"},{neveshte:"پ",tooltip:"پاک کردن قالب بندی (removeFormat)",dastor:"removeFormat"},{neveshte:"آن",tooltip:"زدودن لینک (unlink)",dastor:"unlink"}],vasDogm:[{dastor:"aks",esm:"عکس"},{dastor:"aksbk",esm:"عکس۲"},{dastor:"video",esm:"آپارات"},{dastor:"font",esm:"فونت"},{dastor:"size",esm:"اندازه"},{dastor:"blokQ",esm:"نظر"},{dastor:"link",esm:"لینک"},{dastor:"txa",esm:"کدها"}],fontha:[{dastor:"Vazir",esm:"وزیــــر"},{dastor:"Shabnam",esm:"شبنــــم"},{dastor:"Gandom",esm:"گنـــــدم"},{dastor:"Tanha",esm:"تنهــــا"},{dastor:"Sahel",esm:"ساحـــل"}],sizaha:[{dastor:"1"},{dastor:"2"},{dastor:"3"},{dastor:"4"},{dastor:"5"},{dastor:"6"},{dastor:"7"}]},e.execIn=function(t,s){if(e.aksbakellas&&(s='<img class="teamamaks" src="'+e.aksbakellas+'" >'),e.vimodel){var r=e.vimodel.split("/v/")[1];s='<div class="h_iframe-aparat_embed_frame"> <span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/'+r+'/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>'}e.aksblmodel&&e.esmblmodel&&e.sematblmodel&&e.matnblmodel&&(console.log("nazar vojod dare!!"),s='<blockquote><img src="'+e.aksblmodel+'"/><span class="esm-block">'+e.esmblmodel+'</span><span class="semat-block">'+e.sematblmodel+'</span><div class="matn-block">'+e.matnblmodel+"</div></blockquote>"),console.log("cmd val :->",t+" | "+s),e.iframeT0.contentDocument.execCommand(t,null,s),e.texFi.val(e.iframeT.contents()[0].body.innerHTML),e.ngModel=e.iframeT.contents()[0].body.innerHTML,e.aksmodel="",e.aksmodelkellas="",e.vimodel="",e.linmodel="",e.aksblmodel="",e.esmblmodel="",e.sematblmodel="",e.matnblmodel="",e.aksbakellas="",a.find("frt-video").removeClass("roshan"),a.find("frt-aks").removeClass("roshan"),a.find("frt-aksbk").removeClass("roshan"),a.find("frt-link").removeClass("roshan"),a.find("frt-block").removeClass("roshan")}}}}return{restrict:"E",replace:!0,templateUrl:"barname/html/frt.editor.tmd.html",scope:{ngPattern:"@",ngChange:"&ngChange",ngRequired:"=",ngMinlength:"=",ngMaxlength:"=",ngTrim:"=",ngModel:"="},compile:e}}angular.module("frtEditor",[]).directive("frtEditor",e)}(),function(){"use strict";function e(e,a,t){var s=this;s.matnkamel='<div><p style="text-align: center;"><font face="Shabnam" size="5"><b><a href="http://www.aviny.com/Aviny/ghatlegah.aspx">میگردیم تا قتلگاه را پیدا کنیم</a></b></font></p><hr id="null"><p>شب پنج‌شنبه بود. وقتي فرودگاه مهرآباد رسيدم، تو هنوز نيامده بودي. دلشوره عجيبي داشتم.<br>«خدايا، نكته آقا مرتضي جا بمونه!»</p><div>به طرف قسمت بار رفتم و نگران، در حال تحويل ساكها و وسايل بودم و مراقب در ورودي ترمينال چهار، يك ربع نگذشت كه انتظار به سر رسيد. وقتي نگاهمان به يكديگر گره خورد. با همان چهره هميشه بهارت برايم دست تكان دادي و به سمت ما آمدي.</div><div>طولي نكشيد كه با پرواز ساعت ده شب، به طرف اهواز حركت كرديم.<br>قبل از سوار شدن به هواپيما گفتم:<br>«حاجي شايد اين اخرين سفري باشد كه با هم هستيم»<br>و تو با تعجب گفتي:<br>«واسه چي؟!»<br>گفتم:<br>«مي‌خواهم بروم سراغ درس و مشقم.»<br>و تو فقط گفتي:<br>«مي‌خواهي دل ماهارو بسوزوني؟»</div><div><blockquote><img src="http://www.ibna.ir/images/docs/000225/n00225774-b.jpg"><span class="esm-block">سید مرتضی آوینی</span><span class="semat-block">فیلمساز</span><div class="matn-block">والفجر 1 به نظر ايشان تكميل بود و هيچ اشكالي نداشت ولي والفجر مقدماتي هنوز جاي حرف داشت - آمديم تهران كه با يكي دو تا دوستا يك دفعه تصميم گرفتيم برويم. آقا مرتضي شب پيش با اكيپ فيلمبرداري و صدا برداري با هواپيما راهي شدند و چند تا از دوستان ديگر آقاي، سعيد قاسمي، قاسم دهقان، شهيد سعيد يزدان پرست و چند تا ديگر از دوستان با دو تا ماشين راهي شديم و آنجا با بچه‌ها سر سه راهي قرار گذاشتيم. عصر همان روز يعي روز پنج‌شنبه 19 فروردين رفتيم در كانالهاي عراق. كانالهاي معروفي كه به بچه‌هاي گردان كميل سال 61 در آنجا محاصره بودند. شب را در اردوگاه و قرارگاه متعلق به ارتش عراق مانديم. صبح براي رفتن به قتلگاه معروف صحبت‌هايي براي آقا مرتضي كرده بوديم بعد از اين كه من جنازه بچه‌ها را در آنجا ديدم از خدا آروز كردم كه فقط سالي يكبار بروم و بيايم آنجا. در آنجا تعداد زيادي از شهداء افتاده بودند به طوري كه هيچ مرثيقه خواني نمي‌ـوانست وصف كند. خدا توفيق داده بود يك مدتي آنجا بوديم من يك چنين مجموعه گرمي را نديدم و نه شنيدم. يكي از دوستا كه مي‌خواهم بگويم محور همه آن بچه‌ها بود شهيد قشلاقي بود. وقتي از مجيد براي مرتضي صحبت كردم خيلي شيفته رفتارش شد به طوري كه يادم هست تا چند لجظه قبل از شهادتش مي‌گفت از حشمتي بگو. و اين حشمتي محور بزرگي بود. آقا مرتضي اصرار داشت كه داستان مجيد 13 ساله حتما ضبط شود. صبح جمعه راهي شديم. قرار نبود به طاوسيه، قتلگاه برويم. قرار بود برويم پاسگاهي كه شب قبل در آن بوديم. من اصرار داشتم كه برويم انجا و قتلگاه را بگذاريم براي يكي دو روز بعد. چون يكي از دوستان ما قرار بود كه بايد آنجا و به ما ملحق شود. او صحبتهاي مجيد حشمتي را در چند سال پيش نوشته بود. مجيد يك شخصيت محوري بود كه چه آن موقع و در طي آن ساليان كساني كه او را نديدند شيفته‌اش بودند و آخرين كسي كه تحت تاثير شخصيتش بود خود آقا مرتضي بود.</div></blockquote></div><div><br>اما نه حاجي، من نمي‌دانستم كه چه بگويم، اما وقتي اكنون فكر مي‌كنم همه چيز را بر عكس مي‌گفتم. و جواب برعكس مي‌شنديم. يعني كه تو دل همه را سوزاندي.<br>هواپيما با فرودگاه تهران خداحافظي كرد و سيد مرتضي، تو هم خداحافظي كردي، شايد با همه چيز اين شهر ...<br>ساعتي بعد در فرودگاه اهواز، هواپيما به زمين نشست شب را در مهمانسراي استانداري صبح كرديم. همان مكاني كه تا آخر دوامش نماز شبهاي تو را از ياد نخواهد برد.<br>صبح روز پنج‌شنبه، طبق قراردادي كه با ساير بچه‌ها در سه راهي كرخه گذاشته بوديم، به راه افتاديم. ساعت 10 و 11 بود. سر راه، براي خريد مشغوليات رفتيم شوش دانيال و - نمي‌دانم چرا - تو دو تا چفيه خريدي. ساعت 12 به محل قرار، يعني همين سه راه كرخه رسييدم. و از آنجا به طرف «برفازه» حركت كرديم. چون هفته قبل با بچه‌هاي ارتش هماهنگ شده بوديم. براي حركت مشكلي نداشتيم. بعد از ظهر پنج‌شنبه، به طرف منطقه والفجر مقدماتي راه افتاديم. همين موقع بود كه از من سراغ اوركت‌هاي بسچي را گرفتي گفتي:<br>«اوركتم ديگه قديمي و كهنه شده»</div><div><br></div><div><img class="teamamaks" src="http://s3.picofile.com/file/7490839779/294638_345816128835314_1146663779_n.jpg"></div><div><br>دلم گرفت سيد: چون تو سراغ چيزي را از من مي‌گرفتي كه امروز تو شهر غريبه و هر كس آن را به تن كند به او مي‌گويند «عقب مونده» راستي سيد مرتضي چرا مي‌خواستي اوركت بسيجي بخري؟<br>آفتاب داشت غروب مي‌كرد كه به پاسگاه «رشيديه» رسيدم. جايي كه بچه‌هاي گردان كميل حماسه‌ها آفريدند. جايي كه كانالهايش هنوز رنگ و بوي خون دارد. با سعيد و محمد، مصاحبه كرديم. از حماسه‌ها گفتند و تو گريستي، اشك ريختي آرام و جانسوز، مثل تمام شبهايي كه از خواب مي‌بريدي و نماز شب مي‌خواندي و دوباره مي‌گريستي.<br>بعد از صحبتهاي سعيد، آفتاب غروب كرد چه غروب غمينگي بود آن غروب. در امتداد كانالها حركت كرديم و با هم سرود خوانديم وتو نيز خواندي. «كجاييد اين شهيدان خدايي»<br>...<br>و تو به من گفتي:<br>«فردا اين نوحه را بخوان تا فيلمش را بگيريم.»<br>و من غافل نمي‌دانستم كه بيش از 12 الي 13 ساعت ديگر به آغاز ميهماني جاويد تو باقي نمانده. من غافل نمي‌دانستيم كه تو دعوت شده‌اي و ....<br>شب سايه خودش را سنگين تر كرده بود كه سوار خودروها شديم و به طرف عقب حركت كرديم. تو راه سعيد از حماسه‌هاي «بازي‌ دراز» «كاني مانگا» و «طلائيه» و .... مي‌گفت و تو مي‌سوختي و گريستي<br>كمي تند آمديم كه بتوانيم به «روايت فتح» برسيم. اما وقتي رسيديم معلوم شد كه اين قسمت برنامه برخلاف 5 قسمت قبل زودتر از اخبار ساعت 21 پخش شده بود و تو چقدر ناراحت شدي. نماز خوانديم و شام خورديم. كنسرو بود. صحبت از كار فردا پيش آمد. طبق قراري كه با نماينده ارتش گذاشته بوديم، بايد صبح زود كارمان شروع مي‌شد، نماينده ارتش گفته بود: «تا ظهر بيشتر نمي‌توانم همراه با شما باشم.»</div><div><br></div><div><div class="h_iframe-aparat_embed_frame"> <span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/PhHOS/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div></div><div><br>و تو آن شب نخوابيدي و من - شايد - بلافاصله دريافتم كه اين شب با شبهاي ديگرت فرق مي‌كند نماز شب خواندي و قرآن خواندي و گريستي و اشك ريختي. آرام و و جانسوز و فردا بود كه يكي از سربازهاي پاسگاه به حالتي بهت‌زده و حيرت آلود به من گفت:<br>«اين آقا (منظورش تو بود سيد) ديشب وقتي من نگهبان بودم، دائم گريه كرد، نماز خواند و قرآن»<br>و نگهبانان همه تصديق كردند كه در زمان پست آنها نيز اين واقعه جاري بوده است.<br>نماز صبح را خوانديم. صبحانه خورديم و حدود ساعت 20/7 دقيقه بود كه راه افتاديم. در راه بود كه موج راديو را چرخاندم تا تهران را بگيرم كه يك دفعه راديو قرآن آمد روي موج و تو گفتي:<br>«همين جا خوبه اصغر! همين جا را بگير»<br>از نگهباني و دژباني گذشتيم. اكنون به جايي كه مقصد بود، يعني «قتلگاه» نزديك مي‌شديم. جايي كه 40 الي 50 نفر از بچه‌هاي بسيج كنار هم شهيد شده بودند و از قرائن پيدا بود كه برخي از آنها در زمان شهادت دست در گردن يكديگر كرده بودند و تو امروز قصد داشتي روايت مظلوميت آنان را براي مردم بخواني و به تصوير بكشي.<br>به طرف قتلگاه پيش مي‌رفتيم و تو، سيد! اصرار داشتي كه حتما مصاحبه با بچه‌ها حتما بايد در قتلگاه انجام بپذيرد و - شايد - مي‌دانستي كه آنجا حقيقتا قتلگاه است.<br>من مثل هميشه با كمي چاشني شوخي و خنده گفتم: سيد! قتلگاه هم شبيه به همين تپه‌ها و گودالهاست ديگه! همين جاها مصاحبه را بگير!»<br>و تو با صبوري و طنازي مخصوص خودت گفتي: «نه اصغر جان، مي‌گرديم تا قتلگاه را پيدا كنيم.»<br>چند لحظه بعد از اين حرف بود كه قتلگاه را يافتي و پركشيدي و رفتي ... و چه زيبا يافتني و رفتني.<br></div><div><br></div><div></div></div>',s.matnnemayesh=a.trustAsHtml(s.matnkamel),t.$watch("mn.matnkamel",function(e,t,r){s.matnnemayesh=a.trustAsHtml(e)})}e.$inject=["$state","$sce","$scope"],angular.module("barname.khane").controller("khaneCtrl",e)}(),function(){"use strict";function e(e,a,t){}e.$inject=["$state","$sce","$scope"],angular.module("barname.link").controller("linkCtrl",e)}(),function(){"use strict";function e(e,a,t){}e.$inject=["$state","$sce","$scope"],angular.module("barname.mali").controller("maliCtrl",e)}(),function(){"use strict";function e(e,a,t){}e.$inject=["$state","$sce","$scope"],angular.module("barname.nahve").controller("nahveCtrl",e)}(),function(){"use strict";function e(e,a,t){}e.$inject=["$state","$sce","$scope"],angular.module("barname.tose").controller("toseCtrl",e)}(),angular.module("frtEditor").run(["$templateCache",function(e){e.put("barname/html/frt.editor.tmd.html",'<div class="rteditor"><div class="dogmeha-rt"><div class="vas-nev-div"><span ng-repeat="das in dastorat.vasNev" ng-class="(\'frtc-\' + das.dastor)" ng-click="execIn(das.dastor, null)" class="dogme i-sorme i-round dogme-ov"> \n{{ das.neveshte }}<div class="tooltip">{{ das.tooltip }}</div></span></div><div class="vas-dog-div"><span ng-if="iframeT0.contentDocument.designMode === \'off\'" ng-click="nemayesh(\'faal\')" class="dogme i-sorme i-round dogme-ov">فعال</span><span ng-repeat="dogm in dastorat.vasDogm" ng-click="nemayesh(dogm.dastor)" class="dogme i-sorme i-round dogme-ov">{{dogm.esm}}</span></div><div class="form-item"><frt-video class="form-tak taki khamosh"><label>آپارات :</label><input type="text" ng-model="vimodel"/><div class="baraks-f"><span ng-click="execIn(\'insertHTML\', vimodel)" class="dogme i-sorme i-gerd i-ghabol"></span><span ng-click="baste()" class="dogme i-ghermez i-gerd i-rad"></span></div></frt-video><frt-aks class="form-tak taki khamosh"><label>عکس :</label><input type="text" ng-model="aksmodel"/><div class="baraks-f"><span ng-click="execIn(\'insertImage\', aksmodel)" class="dogme i-sorme i-gerd i-ghabol"></span><span ng-click="baste()" class="dogme i-ghermez i-gerd i-rad"></span></div></frt-aks><frt-aksbk class="form-tak taki khamosh"><label>عکس۲ :</label><input type="text" ng-model="aksbakellas"/><div class="baraks-f"><span ng-click="execIn(\'insertHTML\', aksbakellas)" class="dogme i-sorme i-gerd i-ghabol"></span><span ng-click="baste()" class="dogme i-ghermez i-gerd i-rad"></span></div></frt-aksbk><frt-link class="form-tak taki khamosh"><label>لینک :</label><input type="text" ng-model="linmodel"/><div class="baraks-f"><span ng-click="execIn(\'createLink\', linmodel)" class="dogme i-sorme i-gerd i-ghabol"></span><span ng-click="baste()" class="dogme i-ghermez i-gerd i-rad"></span></div></frt-link><frt-block class="form-tak taki khamosh"><label>اظهار نظرات :</label><input type="text" ng-model="aksblmodel" placeholder="عکس"/><input type="text" ng-model="esmblmodel" placeholder="نام"/><input type="text" ng-model="sematblmodel" placeholder="سمت"/><input type="text" ng-model="matnblmodel" placeholder="متن"/><div class="baraks-f"><span ng-click="execIn(\'insertHTML\', nazarblmodel)" class="dogme i-sorme i-gerd i-ghabol"></span><span ng-click="baste()" class="dogme i-ghermez i-gerd i-rad"></span></div></frt-block></div><frt-font class="frt-font khamosh"><span ng-repeat="font in dastorat.fontha" ng-click="execIn(\'fontName\', font.dastor)" class="dogme i-sorme i-round"><font face="font.dastor">{{ font.esm }}</font></span></frt-font><frt-fontsize class="frt-font khamosh"><span ng-repeat="size in dastorat.sizaha" ng-click="execIn(\'fontSize\', size.dastor)" class="dogme i-sorme i-round">{{ size.dastor }}</span></frt-fontsize></div><div class="frame-rt"><iframe name="richtextfield" id="richtextfield">این متن قابل ویرایش است</iframe><br/><br/></div><textarea rows="8" ng-minlength="ngMinlength" ng-maxlength="ngMaxlength" ng-required="ngRequired" ng-pattern="ngPattern" ng-change="ngChange()" ng-trim="ngTrim" ng-model="ngModel" disabled="disabled" class="rt-texarea"></textarea></div>'),e.put("barname/html/khane.ghaleb.html",'<div class="gride"><div class="posht"><h1>ویرایشگر فارسی</h1></div><div class="noh-darbar"><frt-editor ng-model="mn.matnkamel"></frt-editor></div></div><div class="gride"><div class="posht"><h1> نمایش متن</h1></div><div class="noh-darbar"><div ng-bind-html="mn.matnnemayesh" class="matn"></div></div></div>'),e.put("barname/html/link.ghaleb.html",'<div class="gride"><div class="posht"><h1>در حال طراحی</h1></div><div class="noh-darbar"><h3> این صفحه در حال طراحی است</h3></div></div>'),e.put("barname/html/mali.ghaleb.html",'<div class="gride"><div class="posht"><h1>کمک های مالی</h1></div><div class="noh-darbar flex-darbar">اگر این ویرایشگر به کارتون اومد میتونید از طریق دگمه زیر یا شماره کارت بانکی که در پایین میبیند هر مبلغی که دوست دارید رو برای ادامه حیات اون و گسترشش در انگولار ۲ و  react و … پرداخت کنید. به دنیای متن باز کمک کنیم هر چند کار کوچکی انجام شده باشه.<a href="https://www.payping.ir/sydamir" class="dogme i-sabz -i-round temamsafe bamatn i-arrow">کمک مالی</a><div class="cart"><div class="ghabe-kart"><h3> بانک پارسیان</h3><div class="name">سید امیر حسینی</div><div class="shomare">6221 0610 7790 3401</div></div></div><div class="baraks-f">ممنون</div></div></div>'),e.put("barname/html/nahve.ghaleb.html",'<div class="gride"><div class="posht"><h1>طریقه نصب</h1></div><div class="noh-darbar">دو فایل<ul><li>frt-editor.css</li><li>frt-editor.js</li></ul>رو که در پوشه ی تولید (tolid) هستند رو در فایل ایندکس (index.html) خودتون اضافه کنید، حواستون باشه که فایل CSS رو داخل تگ head و فایل JS رو قبل از بسته شدن تگ body و حتما بعد از انگولار قرار بدید:<pre class="code">&lt;head&gt;\n.\n.\n.\n  &lt;link rel=&quot;stylesheet&quot; href=&quot;xyz/frt-editor.css&quot;&gt;\n&lt;/head&gt;\n&lt;body&gt;\n.\n.\n.\n  &lt;script src=&quot;xyz/angular.js&quot;&gt;&lt;/script&gt;\n  &lt;script src=&quot;xyz/frt-editor.js&quot;&gt;&lt;/script&gt;\n&lt;/body&gt;</pre>و بعد دایرکتیو رو به عنوان یه وابستگی به ماژول انگولار اضافه اش کنید:<pre class="code"> angular.module( \'barname\', [\n           // directive\n           \'frtEditor\',\n       ] )\n       .config( tanzimBarname );</pre>حالا فقط کافی هر جایی که لازم دارید از ویرایشگر استفاده کنید تگش رو بذارید:<pre class="code"> &lt;frt-editor ng-model=&quot;matnkamel&quot;&gt;&lt;/frt-editor&gt;</pre><br/><hr/><br/><h2>نصب ویرایشگر از طریق باور (Bower):</h2><br/>برای نصب ویرایشگر از طریق باور (Bower) هم میتونید از این دستور استفاده کنید :<pre class="code">bower install frt-editor --save</pre>این دستور کل ریپوی پروژه رو تو پوشه ي bower_components یا هر پوشه ای که خودتون تنظیم کردید دانلود میکنه فقط کافیه آدرس دو تا فایل ای که داخل پوشه تولید (tolid) ریپو هست رو به صفحه ایندکس اضافه کنید اگر هم انجام این کار رو با task runnerها مثل Gulp اتوماتیک کردید این دوتا فایل خودکار به صفحه ایندکس اضافه میشند.</div></div><div class="gride"><div class="posht"><h1>ویدیوهای آموزش استفاده از ویرایشگر</h1></div><div class="noh-darbar"><h2> معرفی ویرایشگر</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/oFny8/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div><br/><hr/><br/><br/><h2> نحوه بولد و ... کردن متن</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/j1YDr/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div><br/><hr/><br/><br/><h2> نحوه پاک کردن استایل و آنلینک کردن</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/NvW1m/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div><br/><hr/><br/><br/><h2> پیاده سازی عکس</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/Psftz/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div><br/><hr/><br/><br/><h2> اضافه کردن ویدیو از آپارت</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/V2jkr/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div><br/><hr/><br/><br/><h2> گذاشتن اظهار نظرها</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/ZtR8F/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div><br/><hr/><br/><br/><h2> فونت و اندازه</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/Tdv60/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div><br/><hr/><br/><br/><h2> استفاده کلی</h2><br/><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/K0I3u/vt/frame" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div></div></div>'),e.put("barname/html/tose.ghaleb.html",'<div class="gride"><div class="posht"><h1>در حال طراحی</h1></div><div class="noh-darbar"><h3> این صفحه در حال طراحی است</h3></div></div>')}]);