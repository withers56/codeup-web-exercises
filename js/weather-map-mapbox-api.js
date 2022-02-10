'use strict';

mapboxgl.accessToken = MAPBOXGL_ACCESS_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4916, 29.4252],
    zoom: 10
});

// Add the control to the map.
const mapboxgeocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false,
})

let currentMarkers = [];

map.addControl(
    mapboxgeocoder
);

function createMarker (lng, lat) {

    for (let i = 0; i < currentMarkers.length; i++) {
        currentMarkers[i].remove();
    }


    let newMarker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
    currentMarkers.push(newMarker);

    return newMarker
}

function getLngLat (results) {
    getLocationData(results[0], results[1]);
}


mapboxgeocoder.on('result', function (results){
    let addressSearchArray = [];
    let address = results.result.place_name.split(', ')
    addressSearchArray.push(address[1]);
    addressSearchArray.push(address[2].split(' '));
    addressSearchArray[1].pop();

    console.log(addressSearchArray)
    geocode(`${results.result.place_name}`, MAPBOXGL_ACCESS_TOKEN).then(function (result){
        getLocationData(result[1], result[0],addressSearchArray);
        createMarker(result[0], result[1]);
    });

});

map.on('click', function (result){
    createMarker(result.lngLat.lng, result.lngLat.lat);
    let lat = result.lat;
    let lng = result.lng
    let tempArray = [];
    reverseGeocode(result.lngLat, MAPBOXGL_ACCESS_TOKEN).then(function (result){

        let addressArray = result.split(', ');
            tempArray.push(addressArray[1]);
            tempArray.push(addressArray[2].split(' '))
            tempArray[1].pop()


    });

    getLocationData(result.lngLat.lat, result.lngLat.lng, tempArray);


})




