'use strict';
$(document).ready(function (){

    function getLocationData (lat, long) {
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${OPEN_WEATHER_MAP_KEY}`, {
            units: "imperial"
        }).done(function(data) {
            console.log(getDate(data.current.dt));

            console.log("Current: " + data.current.temp)
            console.log("Low: " + data.daily[0].temp.min)
            console.log("High: " + data.daily[0].temp.max)
            console.log(data)
            // console.log(data.current.dt);
            // console.log('Diving in - here is current information: ', data.current);
            // console.log('A step further - information for tomorrow: ', data.daily[1]);
            // console.log(data.timezone);
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

    function getDayOfWeek () {
        let day = myDate.getDay();

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






    getLocationData(24, -98);
    getLocationData(30, 100)





















});