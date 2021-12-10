"use strict";

// define a function and immediately invoke (i.e. call) it
(function () {
    var iffeVar = "I'm local to the IIFE.";
////////////////////////////////////////////////////////////////////


console.log("Hello from external javascipt");

let myAge = 24;// without strict wouldn't need use strict.

// alert("Check out this alert");
//
// let areYouDoingJS = confirm("Are you doing js rn? Y / N");//boolean
//
// console.log(areYouDoingJS);
// console.log(confirm('Are you doing js rn? Y / N"')), doesnt store response

// let doYouLikePizza = confirm("Do u like pizza?")
//
// if (doYouLikePizza) {
//     alert("awesome, who doesnt");
// } else {
//     alert("how?");
// }

// let userInput = prompt('Please type a number to add two:');
// console.log('Your number plus 2 is: ' + (parseInt(userInput) + 2));

alert("Hello to my website!");

let userFavColor = prompt("What is your favorite color? ");

alert("Great! " + userFavColor + " is my favorite color too!");

let movieCount = prompt("How many movies did you rent?");
let daysRented = prompt("How many days where you renting for?");

alert("Your total is: $" + (movieCount*daysRented));

let googlePay = prompt("What is your hourly rate for google?");
let amazonPay = prompt("What is your hourly rate for amazon?");
let facebookPay = prompt("What is your hourly rate for facebook?");
let googleHours = prompt("How many hours did u work for google?");
let amazonHours = prompt("How many hours did u work for amazon?");
let facebookHours = prompt("How many hours did u work for facebook?");


alert("Your total pay from google is: $" + googlePay * googleHours);
alert("Your total pay from amazon is: $" + amazonPay * amazonHours);
alert("Your total pay from facebook is: $" + facebookPay * facebookHours);
alert("All together the total is: $" + (googlePay * googleHours + amazonPay * amazonHours + facebookPay * facebookHours));

//A student can be enrolled in a class only if the class is not full and the
//class schedule does not conflict with her current schedule.

let classCapacity = prompt("What capacity is the class at?");
let classMaxCapacity = prompt("What is the classes MAX capacity?");
let scheduleConflict = confirm("Does it conflict with your schedule?");



if ((classCapacity < classMaxCapacity) && (scheduleConflict == false))
{
    alert("The student is cleared for class.");
}
else alert("The student is not cleared for class.");

///////////////////////////////////////////////////////////////////////////

//A product offer can be applied only if a person buys more than 2 items, and
// the offer has not expired. Premium members do not need to buy a
// specific amount of products.

let offerExpire = confirm("Is the offer expired?");
let itemAmount = prompt("How many items do you have?");
let premiumMemberStatus = confirm("Are you a member?")

if ((premiumMemberStatus == true) && (offerExpire == false))
{
    alert("Customer will recieve a discount.")
}
else if ((itemAmount > 2) && (offerExpire == false))
{
    alert("Customer will recieve a discount.");
}
else alert("No discount available");

})();