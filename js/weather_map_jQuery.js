'use strict';

const geo = navigator.geolocation;

settingUsersCurrentLocation();

function settingUsersCurrentLocation () {
    geo.getCurrentPosition((position) => {
        let userLat = position.coords.latitude;
        let userLng = position.coords.longitude;

        let coordinates = {
            lng: position.coords.longitude,
            lat: position.coords.latitude
        }

        map.setCenter([userLng, userLat]);
        createMarker(userLng, userLat);

        reverseGeocode(coordinates, MAPBOXGL_ACCESS_TOKEN).then(function (result){
            getLocationData(userLat,userLng, result);
        });



    });
}

function appendWeatherData(data, locationArray) {

    let weatherBox = $('.weather-box');
    let currentDayBox = $('.current-day-box');

    currentDayBox.html('');
    currentDayBox.html
    (`
                <div class="card mt-3 mx-2">
                    <div class="card-header">
                        <span>${locationArray}</span>
                    </div>
                    <div class="card-body">
    
                            <div class="d-flex justify-content-between">
                                <div>
                                    <div class="bigger-text">${data.current.temp.toFixed(0)}&#176;</div>
                                    <div class="smaller-text">${data.current.weather[0].main}</div>
                                    <div class="smaller-text">Feels like ${data.current.feels_like.toFixed(0)}&#176; Humidity ${data.current.humidity}%</div>
                                </div>
                                <div>
                                    <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png"  alt="icon">
                                    <div class="smaller-text  text-center">${getSearchedTime(data.timezone_offset)}</div>
                                </div>
                            </div>
                    </div>
                <div class="card-header">
                    <a href="https://openweathermap.org/" target="_blank"><button class="btn">Open weather map</button></a>
                </div>
            </div>
    `)


    console.log(data)
    weatherBox.html('');
    for (let i = 0; i < data.daily.length; i++) {
        weatherBox.append
        (`
            <div class="weekly-containers d-flex justify-content-around align-items-center border-bottom">
                <div>
                    <img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png"  alt="icon">
                </div>
                <div>
                    ${getDayOfWeek(getDate(data.daily[i].dt).getDay())}
                </div>
                <div><span class="mr-2">Low: ${data.daily[i].temp.min.toFixed(0)}&#176;</span> High: ${data.daily[i].temp.max.toFixed(0)}&#176;</div>
            </div> 
        `)
    }

    weatherBox.append
    (`
                            <div class="col-12 d-flex justify-content-between align-items-center text-center mt-3">
                                <div class="col-4">
                                    <a href="https://github.com/withers56" target="_blank"><i class="bi bi-github"></i></i></a>
                                </div>
                                <div class="col-4">
                                    <a href="https://openweathermap.org/" target="_blank"><i class="bi bi-brightness-high"></i></a>
                                </div>
                                <div class="col-4">
                                    <a href="https://www.mapbox.com/" target="_blank"><i class="bi bi-map"></i></a>
                                </div>
                            </div>
                            
                            </div>
    `)

    weatherBox.children().each(function(index) {
        if (index % 2 !== 0) {
            $(this).css('background-color', 'rgba(179, 179, 179, 0.5)');
        }
    });

}

    function getLocationData (lat, long, locationArray) {
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${OPEN_WEATHER_MAP_KEY}`, {
            units: "imperial"
        }).done(function(data) {
            appendWeatherData(data, locationArray)
        });
    }

    function getDayOfWeek (day) {

        if (day === 0)
            return 'Sunday';
        if (day === 1)
            return 'Monday';
        if (day === 2)
            return 'Tuesday';
        if (day === 3)
            return 'Wednesday';
        if (day === 4)
            return 'Thursday';
        if (day === 5)
            return 'Friday';
        if (day === 6)
            return 'Saturday';
    }

    function getDate(day) {
        return new Date(day * 1001);
    }

    function getSearchedTime (offset) {
        let d = new Date()
        let localTime;
        localTime = d.getTime()
        let localOffset;
        localOffset = d.getTimezoneOffset() * 60000
        let utc;
        utc = localTime + localOffset
        let atlanta = utc + (1000 * offset)
        let newDate = new Date(atlanta)
        console.log(newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));

        return newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    }