var h_window = $(window).height(), 
 	w_window = $(window).width(),

	h_navbar = $('.navbar-site').outerHeight(true),//+
	h_navbar_header = $('.navbar-header').outerHeight(true),//+
	h_navbar_fixed = $('.navbar-fixed-top').outerHeight(true),

	h_header = $('.header-site').outerHeight(true),

	h_footer = $('.footer-site').outerHeight(true),//+
 	h_resize = h_window - h_navbar - h_footer, //+
 	h_resize404 = h_window - h_navbar + h_footer, //+

 	h_resize_map = h_window - h_header - 50,
 	h_resize_xs = h_window,
	h_navbar_collapse = h_window - h_navbar_header;

if (device.mobile() || device.tablet()) {
	$('.navbar').addClass('navbar-fixed-top');
	//$('body').css("padding-top", h_navbar_fixed);
	$('.navbar-contacts__cols').appendTo('.navbar-collapse__row');
	$('._cpc__address').appendTo('.contacts-page-content .container');
	$('._tipc__item-preview').prependTo('._tipc__content');
	$('.form-site').css("padding-bottom", h_footer);
} else {		
	$('.navbar-site .dropdown .dropdown-toggle').on('click.azbn', function(event){
		event.preventDefault();
		var btn = $(this);
		var href = btn.attr('href');
		window.location.href = href;	
	});	
}
if (device.mobile()) {
	$('.navbar-contacts__cols').appendTo('.navbar-collapse__row');
	//$(window).trigger('resize');
	$('.content-site').removeAttr("style");	
	//$('.navbar-collapse .container').css("height", h_navbar_collapse);
	$('.navbar-collapse .navbar-collapse__row').css("height", "auto");

} else {
	$('.content-site').css("min-height", h_resize);
	$('.error-page-content').css("min-height", h_resize404);
	$('.navbar-collapse .container').removeAttr("style");	
}

$("nav.navbar-fixed-top").autoHidingNavbar(); 