'use strict';

mapboxgl.accessToken = MAPBOXGL_ACCESS_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4916, 29.4252],
    zoom: 10
});

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

function createMarker (lng, lat) {
    return new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
}
 createMarker(-98, 29)
