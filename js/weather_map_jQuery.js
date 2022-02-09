'use strict';
$(document).ready(function (){

const sanAntonioWeather = $.ajax("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_MAP_KEY,
    q: "San Antonio, Texas"
});

sanAntonioWeather.done(function (data, status) {
    console.log(status);
    console.log(data);
});





















});