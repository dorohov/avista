'use strict';


window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}


function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{"default":[],portrait:[],landscape:[]},sm:{"default":[],portrait:[],landscape:[]},md:{"default":[],portrait:[],landscape:[]},lg:{"default":[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t["default"].push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type]["default"])for(var r=0;r<e.__resizefunctions[n.type]["default"].length;r++){var t=e.__resizefunctions[n.type]["default"][r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);
!function(){"use strict";$(window).load(function(){$("[data-toggle-nav]").click(function(){var t=$(this).data("toggle-nav");$(t).toggleClass("open-sidebar")})})}();


$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var o=(new Date).getTime();$(document.body).attr("data-created_at",o),$(document.body).trigger("fecss.nedb.visit.insert",[{href:window.location.href,referrer:document.referrer}])}),$(document.body).on("fecss.window.unload",null,{},function(e,o){console.log("body trigger:fecss.window.unload: "+JSON.stringify(o))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,o){console.log("body trigger:fecss.keydown: "+JSON.stringify(o))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,o){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta});
$(document.body).on("click.fecss.page-loader.close-loader",".page-loader .close-loader",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.page-loader.close-loader"),$(".page-loader").removeClass("active")});
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		$(function(){console.log("body trigger:changeClass action:"+event_action)});
	});
	
	
	/*
	События смены класса у любого элемента
	*/
		
	
	
	/*
	Основная логика сайта
	*/
	$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){moment.locale(window.navigator.userLanguage||window.navigator.language)});
$(document.body).on("click.fecss.go-to-top",".go-to-top",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},777)});
$(window).load(function(a){$(".page-loader").removeClass("active")});
$(".gallery-site__item").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site");var url=window.location.href;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('._fs__navbar a[href="'+url+'"]').parent().addClass("active"),$('.tabs-site a[href="'+url+'"]').parent().addClass("active"),$('.services-dropdown .dropdown-menu a[href="'+url+'"]').parent().addClass("active"),$(".text-block table").addClass("table table-bordered"),$("._sppc__item").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")}),$("._ipc__services-item").hover(function(){var t=$("html").hasClass("msie"),e=$(this).attr("data-target");t?$(e).attr("transform","translate(100 100) scale(1.16) translate(-120 -120)"):$(e).attr("data-hover","onhover")},function(){var t=$("html").hasClass("msie"),e=$(this).attr("data-target");t?$(e).attr("transform"," "):$(e).attr("data-hover"," ")}),$(".navbar-site .dropdown").hover(function(){$(this).addClass("open")},function(){$(this).removeClass("open")}),$("._ipc__slider").owlCarousel({margin:0,loop:!0,items:1,nav:!1,dots:!0,navText:[],autoplay:!0,autoplayTimeout:1e4}),$(".teachers-list").owlCarousel({margin:35,navText:[],nav:!0,dots:!1,smartSpeed:500,responsive:{0:{items:1},768:{items:2},1025:{items:3},1600:{items:4}}}),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none"}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}});

$(".news-item").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")});
	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
var h_window=$(window).height(),w_window=$(window).width(),h_navbar=$(".navbar-site").outerHeight(!0),h_navbar_header=$(".navbar-header").outerHeight(!0),h_navbar_fixed=$(".navbar-fixed-top").outerHeight(!0),h_header=$(".header-site").outerHeight(!0),h_footer=$(".footer-site").outerHeight(!0),h_resize=h_window-h_navbar-h_footer,h_resize404=h_window-h_navbar+h_footer,h_resize_map=h_window-h_header-50,h_resize_xs=h_window,h_navbar_collapse=h_window-h_navbar_header;device.mobile()||device.tablet()?($(".navbar").addClass("navbar-fixed-top"),$(".navbar-contacts__cols").appendTo(".navbar-collapse__row"),$("._cpc__address").appendTo(".contacts-page-content .container"),$("._tipc__item-preview").prependTo("._tipc__content"),$(".form-site").css("padding-bottom",h_footer)):$(".navbar-site .dropdown .dropdown-toggle").on("click.azbn",function(e){e.preventDefault();var a=$(this),o=a.attr("href");window.location.href=o}),device.mobile()?($(".navbar-contacts__cols").appendTo(".navbar-collapse__row"),$(".content-site").removeAttr("style"),$(".navbar-collapse .navbar-collapse__row").css("height","auto")):($(".content-site").css("min-height",h_resize),$(".error-page-content").css("min-height",h_resize404),$(".navbar-collapse .container").removeAttr("style")),$("nav.navbar-fixed-top").autoHidingNavbar();
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?a<200&&o.removeClass("active"):a>200&&o.addClass("active")});
	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	*/
	$(document.body).trigger('fecss.init');
	
	
});