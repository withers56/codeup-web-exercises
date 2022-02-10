'use strict';
// $(document).ready(function (){


let startUpArray = ['600 Navarro', 'San Antonio', 'Texas 78255'];


getLocationData(29.42 ,-98, startUpArray);

    function appendWeatherData(data, locationArray) {

        let weatherBox = $('.weather-box');
        let currentDayBox = $('.current-day-box');

        currentDayBox.html('');
        currentDayBox.html(
            `
                     <div class="card mt-1 mx-2">
                <div class="card-header">
                    <span>${locationArray[0]}, ${locationArray[1]}</span><span class="smaller-text pl-3">${getTime()}</span>
                </div>
                <div class="card-body">

                        <div class="d-flex justify-content-between">
                            <div>
                                <div class="bigger-text">${data.current.temp.toFixed(0)}&#176;</div>
                                <div class="smaller-text">${data.current.weather[0].main}</div>
                                <div class="smaller-text">Feels like ${data.current.feels_like.toFixed(0)}&#176; Humidity ${data.current.humidity}%</div>
                            </div>
                            <div><img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png"  alt="icon"></div>
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
            weatherBox.append(`
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

        weatherBox.append(`
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
    }



    function getLocationData (lat, long, locationArray) {
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${OPEN_WEATHER_MAP_KEY}`, {
            units: "imperial"
        }).done(function(data) {
            appendWeatherData(data, locationArray)
        });
    }

    function getLowAndHigh(tempsArray) {

        let low = 200;
        let high = 0;

        for (let i = 0; i < tempsArray.length; i++) {
            if (tempsArray[i].temp < low){
                low = tempsArray[i].temp
            }
            if (tempsArray[i].temp > high){
                high = tempsArray[i].temp
            }
        }
        console.log("low: " + low);
        console.log("high: " + high);
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

    function formatHour(hours) {

    }

    function getDate(day) {
        let date = new Date(day * 1000);
        return date;
    }

    function getTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        var time = now.getHours() + ":" + now.getMinutes();

        if (now.getMinutes() < 10) {
            minutes = "0" + minutes;
        }

        if(now.getHours() > 12){
            hours -= 12
            return hours + ":" + minutes;
        }
        return hours + ":" + minutes;
    }
























// });