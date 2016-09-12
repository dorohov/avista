$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
var url = window.location.href;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('._fs__navbar a[href="'+url+'"]').parent().addClass('active'); 
$('.tabs-site a[href="'+url+'"]').parent().addClass('active'); 
$('.services-dropdown .dropdown-menu a[href="'+url+'"]').parent().addClass('active'); 
/*
if(url != "/"){
	$('<li><a href="/">Главная</a></li>').prependTo($('.navbar-nav'));
}*/

//var SVG = document.getElementById('service-svg').getSVGDocument();
//var EL = SVG.getElementsByClassName('svg-item1');

$('.text-block table').addClass('table table-bordered');
$('._sppc__item').hover(
	function(){
		$(this).addClass('active');
	},
	function(){
		$(this).removeClass('active');
	}
);

$('._ipc__services-item').hover(
	function(){
		var ieotstoi = $('html').hasClass('msie');
		var svgTarget = $(this).attr('data-target');
		if(ieotstoi){
			$(svgTarget).attr('transform', 'translate(100 100) scale(1.16) translate(-120 -120)');
		} else{
			$(svgTarget).attr('data-hover', 'onhover');
		}
	},
	function(){
		var ieotstoi = $('html').hasClass('msie');
		var svgTarget = $(this).attr('data-target');
		if(ieotstoi){
			$(svgTarget).attr('transform', ' ');			
		} else{
			$(svgTarget).attr('data-hover', ' ');
		}
	}
);
$('.navbar-site .dropdown').hover(
	function(){
		$(this).addClass('open');
	},
	function(){
		$(this).removeClass('open');
	}
);
$('._ipc__slider').owlCarousel({
	margin: 0,
	loop: true,
	items:1,
	nav: false,
	dots: true,
	navText: [],
	autoplay:true,
	autoplayTimeout:10000
});
$('.teachers-list').owlCarousel({
	margin: 35,
	navText: [],
	nav: true,
	dots: false,
	smartSpeed: 500,
	responsive:{
	   	0:{
			items:1
	   	},
	   	768:{
			items:2
	   	},
	   	1025:{
			items:3
	   	},
	   	1600:{
			items:4
	   	}
	} 
}); 
//parallax
/*
var left = 0, top = 0,  
	element = $('.parallax__for-peoples'),
	element1 = $('.header-site');
	
if(element.length){
	var offset =  { left: element.offset().left, top: element.offset().top };
	element.bind('mousemove', function(e){
		left = (e.pageX-offset.left);
		top = (e.pageY-offset.top);
	  	$(this).css({backgroundPosition   : '-'+(0.03*left)+'px -'+(0.01*top)+'px'});
	});
};
if(element1.length){
	var offset1 =  { left: element1.offset().left, top: element1.offset().top };
	element1.bind('mousemove', function(e){
		left = (e.pageX-offset1.left);
		top = (e.pageY-offset1.top);
	  	$(this).css({backgroundPosition   : '-'+(0.03*left)+'px top'});
	});
};*/
$('.fancybox').fancybox({
	prevEffect : 'none',
	nextEffect : 'none',
});
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	closeBtn  : false,
	helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},
	afterLoad : function() {
		this.title = this.title;
	}
});