"use strict";

console.log("Hello from external");

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

let userInput = prompt('Please type a number to add two:');
console.log('Your number plus 2 is: ' + (parseInt(userInput) + 2));


