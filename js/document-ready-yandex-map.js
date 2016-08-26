'use strict';

$(function() {
	
	var yam = $('#yandex-map');
	
	var _m_center = {		
		center: [52.95464, 36.0620], // расположение района
		zoom: 18
	};
	
	if($(document).width() < 1025) {
		_m_center = {
			center: [52.9545, 36.0640], // расположение района
			zoom: 17
		}
	} else {
		_m_center = {
			center: [52.95464, 36.0620], // расположение района
			zoom: 18
		}		
	}
	
	var myMap;
	
	var initYandexMap = function() {
		
		myMap = new ymaps.Map('yandex-map', _m_center, {
			searchControlProvider: 'yandex#search'
		});
		var firm_office = new ymaps.Placemark([52.954791, 36.063988], {
			hintContent: 'Учебный центр «Ависта»'
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