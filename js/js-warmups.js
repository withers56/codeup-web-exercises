"use strict";
// Using the two provided variables, create a piece of logic which will
// determine if a person is qualified to be extended an auto loan.

//     Requirements:
// Their credit score must be over 680 AND have at least $4000 on-hand
// OR, they must have at least $10000 on-hand
// Scenario:
//     I have $12000 on-hand but have a 590 credit score. I get a loan.
//     I have $5000 on-hand with a 720 credit score. I get a loan
//     I have $3000 on-hand with a 720 credit score. I do not get a loan.
//     I have $9000 on-hand with a 590 credit score. I do not get a loan.

// var creditScore = 590;
// var cashOnHand = 12000;
//
// if (((creditScore > 680) && (cashOnHand >= 4000)) || (cashOnHand >= 10000)) {
//     console.log("You have been qualified for the auto loan");
// } else console.log("You did not qualify for the auto loan");

///////////////////////////////////////////////////////////////////////////

// Declare a function called 'isFive' that takes in an input and returns
// true if that input is the number five. Otherwise it should return false.

function isFive(number) {
    return number === 5;
}

// console.log(isFive(1));

////////////////////////////////////////////////////////////////////////////////////

// Make a function named isMultipleOfThree that takes in an input and returns a
// boolean indicating whether or not the input is a multiple of three.

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

//console.log(isMultipleOfThree(27));

/////////////////////////////////////////////////////////////////////////////////////

// evenNumbersOneThroughTwentyFive();
//
// function evenNumbersOneThroughTwentyFive(input) {
//     let counter = 0;
//
//     while (counter <= 25) {
//
//         if (counter % 2 === 0) console.log(counter);
//
//         counter++;
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////

// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 prime numbers.
// https://en.wikipedia.org/wiki/Prime_number

// This one will take some thought. You will need something to count how many prime numbers have
// been calculated, as well as another something to know what raw number your are currently on!

// function primeNumberTest(){
//     let primeCounter = 0;
//     let number = 1;
//     let prime = true;
//
//
// while (primeCounter !== 50) {
//
//     if (number === 1) {
//         console.log("neither prime or composite");
//     } else if (number > 1) {
//
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 prime = false;
//                 break;
//             }
//         }
//         if (prime) {
//             console.log("is prime")
//             console.log(primeCounter)
//             primeCounter++;
//             console.log(primeCounter)
//
//
//         } else {
//             console.log("is not prime");
//
//         }
//
//     }
//     number++;
//     // console.log("test")
// }
//
// }
//
// primeNumberTest()

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function called add(num1, num2) which returns the sum of a and b
// Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// Write a function called sumOfSquares(a, b).
//     You should find the square of a, then the square of b.
//     Invoke add(num1, num2) and pass the new squared values in as arguments.

// function add(num1, num2) {
//     return num1 + num2;
// }
//
// function square(numToSqr) {
//     return numToSqr * numToSqr;
// }
//
// function sumOfSquares(a, b) {
//     return add(square(a), square(b));
// }
//
// console.log(add(2.5, 4));
//
// console.log(square(2));
//
// console.log(sumOfSquares(4, 2));


///////////////////////////////////////////////////////////////////////////////////

// FIZZ-BUZZZZZZZ
// Write a function named getFizzBuzz(startingNum) which performs the following actions:
//     If startingNum is divisible by 3
// console log "fizz"
// Else, if startingNum is divisible by 5
// console log "buzz"
// If startingNum is divisible by 3 AND divisible by 5
// return a string which says "FIZZ BUZZ"
// Thinking about getFizzBuzz(startingNum), let's console log the return value ' +
// 'of this function
// What if getFizzBuzz doesn't return a value (VOID)?
// How do you want to handle that?


// function getFizzBuzz(startingNum) {
//
//     if (startingNum % 3 === 0 && startingNum % 5 === 0) {
//         return "FIZZ BUZZ";
//     }else if (startingNum % 3 === 0) {
//         console.log("fizz");
//     } else if (startingNum % 5 === 0) {
//         console.log("buzz");
//     }
// }
//
// function tryGetFizzBuzz(input){
//     let maybeFizzBuzzIdk = getFizzBuzz(input);
//
//     if (!!maybeFizzBuzzIdk) {
//         console.log(maybeFizzBuzzIdk);
//     }
// }
//
// function runProgramThing() {
//     tryGetFizzBuzz(9);
//     tryGetFizzBuzz(10);
//     tryGetFizzBuzz(15);
// }
//
// runProgramThing();

//////////////////////////////////////////////////////////////////////

// getPaswordInput
// Define a function named getPassword() which performs the following
// actions:
//     Using prompt(), alert(), variables, and a while-loop,
//     ask the user to
// input their password until their entry matches your hard-coded
// password value.
//     HINT: start by defining the correct password and don't' +
// ' forget to link your html file

function getPassword() {
    let actualPassword = "Coffeelover12";
    let passwordInput = prompt("Please enter the password: ");

    while (passwordInput !== actualPassword){
        passwordInput = prompt("Invalid password, please try again.");
    }
    alert("Correct password!");
}
getPassword();






