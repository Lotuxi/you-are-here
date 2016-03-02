function initalize() {

    //The mapCanvas is the HTML element that will hold the map
    var mapCanvas = document.getElementById("map");

    //Set three required options to display the map
    //Other options such as preventing scrolling or zooming, are available
    var mapOptions = {
        center : new google.maps.LatLng(47, -93),   // Lat and long to center the map
        zoom : 5,                                   // 0 = the whole world, 22 = max zoom
        mapTypeId : google.maps.MapTypeId.ROADMAP   //or SATELLITE, HYBRID or TERRAIN
    };

    //And create the map, with the options specified
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Can add features, points of interest, routes, lines etc. to maps
    //Adding a marker to the map
    //Like the map, set the options for the marker
    var markerOptions = {
        position : new google.maps.LatLng(44.97, -93.26), //Where?
        map : map,                       //What map?
        draggable : false,               //No moving the marker!
        title : "Minneapolis is here",    //Tooltip/rollover text
    };

    //Create the marker, with the options above
    //A new marker with the map option set is automatically added to
    //the map it belongs to.
    var marker = new google.maps.Marker(markerOptions);


    var infowindow = new google.maps.InfoWindow ( {
        content : "Minneapolis is right here"
    });

    marker.addListener("click", function() {
        infowindow.open(map, marker);
    });
}

//Load map by calling initalize() method; once page has loaded.
google.maps.event.addDomListener(window, "load", initalize);