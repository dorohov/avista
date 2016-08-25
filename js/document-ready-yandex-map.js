'use strict';

$(function() {
	
	var yam = $('#yandex-map');
	
	var _m_center = {		
		center: [52.965000, 36.084000], // расположение района
		zoom: 16,
		styles: [
			  {
			    "featureType": "landscape.man_made",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#dce4e9" }
			    ]
			  },{
			    "featureType": "poi",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#eaeff2" }
			    ]
			  },{
			    "featureType": "landscape.man_made",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "color": "#f0f6f9" }
			    ]
			  },{
			    "featureType": "road.highway",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#9db6ca" }
			    ]
			  },{
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [
			      { "color": "#819dae" }
			    ]
			  },{
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "color": "#2d3d4d" }
			    ]
			  },{
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "color": "#000000" }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "color": "#000000" }
			    ]
			  },{
			    "featureType": "water",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "color": "#cadbe9" }
			    ]
			  },{
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "color": "#576773" }
			    ]
			  },{
			    "featureType": "transit.station",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      { "color": "#000000" }
			    ]
			  }
			]
	};
	/*
	if($(document).width() < 768) {
		_m_center = {
			center: [52.966000, 36.080500], // расположение района
			zoom: 15,
		}
	} else {
		_m_center = {
			center: [52.965000, 36.084000], // расположение района
			zoom: 16,
		}		
	}
	*/	
	
	var myMap;
	
	var initYandexMap = function() {
		
		myMap = new ymaps.Map('yandex-map', _m_center, {
			searchControlProvider: 'yandex#search'
		});
				
		var firm_office = new ymaps.Placemark([52.96562, 36.080339], {
			hintContent: 'ООО «Энкомсервис»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/default/icon-map.png',
			iconImageSize: [94, 104],
			iconImageOffset: [-47, -104]
		});
		
		myMap
			.geoObjects
				.add(firm_office)
		;			
		myMap .geoObjects;			
			
	}	
	if(yam.length) {		
		ymaps.ready(initYandexMap);		
	}
	
});