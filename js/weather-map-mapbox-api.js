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
    marker: false
})

map.addControl(
    mapboxgeocoder
);

function createMarker (lng, lat) {
    return new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
}

function getLngLat (results) {
    getLocationData(results[0], results[1]);
}


mapboxgeocoder.on('result', function (results){
    console.log(results.result.place_name);
    geocode(`${results.result.place_name}`, MAPBOXGL_ACCESS_TOKEN).then(function (result){
        getLocationData(result[1], result[0]);
        createMarker(result[0], result[1]);
    });

});

map.on('click', function (result){
    console.log(result.lngLat);
    getLocationData(result.lngLat.lat, result.lngLat.lng);
})




