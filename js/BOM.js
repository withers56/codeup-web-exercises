'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop


// letsPlayAGame(7);

function letsPlayAGame(safe){
    var count = 10;
    var min = 0;
    var interval = 1000;// interval time in milliseconds
    var safeNum = 0;

    console.log("-------------------------------------------------------------")
    console.log("Lets play a game, if the computer guess the correct number");
    console.log("You will be saved, if not you will DIE");
    console.log("-------------------------------------------------------------")

    var intervalId = setInterval(function () {
        safeNum = Math.ceil(Math.random()*10)

        if (count <= min) {
            clearInterval(intervalId);
            console.log('BOOM!');
        } else {
            console.log(count + "!");
            count--;
        }

        console.log(`The computer guessed : ${safeNum}`);

        if (safeNum === safe) {
            console.log("You have been saved!");
            clearInterval(intervalId);
        }

    }, interval);
}






// var delay = 5000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     console.log('Here is a delayed hello!');
// }, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring


// redirect browser to google.com

// window.location = 'http://www.google.com';

