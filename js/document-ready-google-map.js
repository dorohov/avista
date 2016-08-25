'use strict';

$(function() {
	google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var coord, coord_marker, zoom_map;
        coord = {lat: 55.8007255, lng: 37.7145009};
        coord_marker = {lat: 55.800696, lng: 37.713945};
        zoom_map = 17;

        var mapOptions = {
            zoom: zoom_map,
            center: new google.maps.LatLng(coord.lat, coord.lng),
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
                  { "color": "#aaaaaa" }
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
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
	  	var image = 'img/default/icon-map.png';
	  	var marker = new google.maps.Marker({
		    position: coord_marker,
		    map: map,
		    icon: image
	 	});
    }		
});