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

// function isFive(number) {
//     return number === 5;
// }

// console.log(isFive(1));

////////////////////////////////////////////////////////////////////////////////////

// Make a function named isMultipleOfThree that takes in an input and returns a
// boolean indicating whether or not the input is a multiple of three.

// function isMultipleOfThree(input) {
//     return input % 3 === 0;
// }

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

// function getPassword() {
//     let actualPassword = "Coffeelover12";
//     let passwordInput = prompt("Please enter the password: ");
//
//     while (passwordInput !== actualPassword){
//         passwordInput = prompt("Invalid password, please try again.");
//     }
//     alert("Correct password!");
// }
// getPassword();

////////////////////////////////////////////////////////////////////////////////////

// B) getMeaningOfLife
// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     This function will use a while loop to compare its current number
// (a variable named counter) against the meaningfulNum.
//     While the counter is not equivalent to the meaningfulNum, continue the loop.
//     Once that condition is broken, console log a string telling the user
// "The meaning of life, the universe, and everything is [your meaningful number]"
// Thinking about the above function, getMeaningOfLife, let’s ask a question:
//     What happens if the value of meaningfulNum is a non-numeric?
//     Write some code to account for this case. How the function handles
// the situation is up to you!
//     Let’s continue with getMeaningOfLife: If the value of meaningfulNum
// happens to be 42, console log a separate message at the end of the function
// to say: "Did you bring your towel?"

// function getMeaningOfLife(meaningfulNum) {
//
//     let counter = 1;
//     meaningfulNum = parseInt(meaningfulNum);
//
//     if (isNaN(meaningfulNum) || meaningfulNum <= 0) {
//         console.log("Invalid input");
//         return;
//     }
//
//     while (counter !== meaningfulNum) {
//         counter++;
//     }
//
//     console.log("The meaning of life, the universe, and everything is " + counter);
//
//     if (counter === 42) {
//         console.log("did you bring your towel?");
//     }
// }
//
// getMeaningOfLife(true);

/////////////////////////////////////////////////////////////////////
// let someCondition = 10;
//
// do {
//     console.log("The loop ran!");
//     someCondition++;
// } while (someCondition < 20);

////////////////////////////////////////////////////////////////////////////

// function petThoseDoggos(numberOfDoggos) {
//
//     for (let i = 1; i <= numberOfDoggos; i++) {
//         console.log(`${i}: **Pats that good boi!**`)
//
//     }
// }
// petThoseDoggos(42);

////////////////////////////////////////////////////////////////////////////////////

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

function forLoopIterate(input) {
    for (let i = 1; i <= input; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
//forLoopIterate(7);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

function forLoopIterate2(input) {
    for (let i = 1; i <= input; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is an even iteration`);
        } else console.log(`${i} is an odd iteration`);
    }
}
//forLoopIterate2(10);

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

// function getPasswordForLoop() {
//     let actualPass = 'Coffeelover12';
//     let userPass = '';
//
//     for (let i = 0; i < 3; i++) {
//         userPass = prompt("Please enter the correct password");
//
//         if (userPass === actualPass) {
//             break;
//         }
//         if (i === 2) {
//             alert("Too many attempts, try again later")
//             return;
//         }
//     }
//     alert("Correct password!");
// }
//
// getPasswordForLoop();

////////////////////////////////////////////////////////////////////////////////////

// continue, starts next iteration
// break, loop finishes immediately
// console.log("start of loop");
// for (let i = 0; i < 3; i++) {
//     console.log("start of loop body");
//
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(`i = ${i}`);
//
//     console.log("End of loop body");
// }
// console.log("end of loop");

//////////////////////////////////////////////////////////////////////////////////////////

// Mini Exercise
// -Create an array with five strings representing your favorite artists
// (music or otherwise) and store it in a variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument

// let favoriteArtist = ['Metallica', 'Kill switch engage', 'avenge sevenfold', 'soad', '3dd'];

// function arrayLogger(array) {
//     console.log(array[0]);
//     console.log(array[2]);
//     console.log(array[array.length -1]);
// }
//
// arrayLogger(favoriteArtist);

// favoriteArtist.forEach(function (guitarHero){
//     console.log(guitarHero);
// })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a function called arrayToString.
//     The function takes a parameter called myArray.
//     It returns a string that is the concatenation of all the elements in myArray.
//     This function is essentially your own version of join.
    // Therefore, you cannot use join in your function body :slightly_smiling_face:
// let someArray = ["this", "is", "a", "test", "array"]
//
// function arrayToString (myArray){
//     let myString = '';
//     for (let i = 0; i < myArray.length; i++) {
//         myString = myString.concat(myArray[i] + " ");
//     }
//     return myString;
// }
//
// console.log(arrayToString(someArray));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array
// and the second argument should be a value you wish to remove
// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll(array, value) {
//     let tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//
//         if (value !== array[i]) {
//             tempArray.push(array[i]);
//         }
//     }
//     return tempArray;
// }
//
// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function sumOfNums(int1, int2) {
//    let sum = 0;
//     if (int1 < int2) {
//         for (let i = int1; i <= int2 ; i++) {
//             sum = sum + i;
//         }
//     } else {
//         for (let i = int2; i <= int1 ; i++) {
//             sum = sum + i;
//         }
//     }
//    return sum;
// }
//
// console.log(sumOfNums(0, -1));
// console.log(sumOfNums(5, 1));
// console.log(sumOfNums(1,5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var myCats = [
//     {
//         catName: "Fifi",
//         age: 5
//     },
//     {
//         catName: "Fluffy",
//         age: 3
//     },
//     {
//         catName: "Abby",
//         age: 7
//     }
// ];
//
// function getNthCat (myCats, n) {
//     return myCats[n];
// }
//
// // print out the cat at index 1
// console.log(getNthCat(myCats, 0));
// console.log(getNthCat(myCats, 1));
// console.log(getNthCat(myCats, 2));

////////////////////////////////////////////////////////

// function narcissistic(value) {
//     let valueToString = "" + value;
//     let valueDigits = ("" + value).length;
//     let tempValue= 0;
//
//     for (let i = 0; i < valueDigits; i++) {
//         tempValue = tempValue + (Math.pow(parseInt(valueToString.charAt(i)), 3));
//     }
//     return tempValue === value;
// }
//
// // console.log(narcissistic(1652));
//
// function numbersThroughN(value) {
//     for (let i = 0; i <= value; i++) {
//         if (narcissistic(i) === true) {
//             console.log(i + " Is narcissistic");
//         }
//     }
// }
//
// numbersThroughN(500);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function called reverseString that takes in a string
// and returns a string that has the characters of the original string in reverse order.
//     example: reverseString('hello') - returns 'olleh'

// function reverseString(myString) {
//     myString = myString.split("");
//     myString.reverse();
//     console.log(myString.join(''));
// }
//
// reverseString("hello");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75


// function findAverage (numArray) {
//     let sum = 0;
//
//     numArray.forEach(function (number) {
//         sum += number
//     })
//     return (sum / numArray.length);
// }
//
// console.log(findAverage([95, 74, 86, 100]));
// console.log(findAverage([93.64, 99, 97, 92]));





// morning JS warmup:
//     write a function called sumOfSquares(a, b)
// takes 2 parameters called a and b
// returns the sum of the squares of a and b
// i.e., (a to the power of 2) + (b to the power of 2)
// e.g., console.log(sumOfSquares(2, 3));
// will return 13

// function sumOfSquares(a, b) {
//     return Math.pow(a, 2) + Math.pow(b, 2);
// }
//
// console.log(sumOfSquares(3, 2));
///////////////////////////////////////////////////////////////////////////////////////

// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// console.log(coffees[0].id);
//
// let coffeeNameArray = [];
// let coffeeFilteredArray = [];
// let typedString = 'B'
//
// for (let i = 0; i < coffees.length; i++) {
//     // console.log(coffees[i].name);
//     coffeeNameArray.push(coffees[i].name);
// }
// let tempArray = [];
// for (let i = 0; i < coffeeNameArray.length; i++) {
//
//     if (coffeeNameArray[i].includes(typedString) === true) {
//         tempArray.push(coffeeNameArray[i]);
//         console.log(tempArray);
//     }
// }








// Write a function called whichStringIsLonger() that takes two parameters and returns one of 4 values:
//     returns "first" if the first string parameter is longer
// returns "second" if the second parameter is longer
// returns "neither" if they are the same length
// returns false if either or both of the parameters are not strings

// function whichStringIsLonger(firstString, secondString) {
//     if (typeof firstString !== 'string' || typeof secondString !== 'string') {
//         return false;
//     }
//     if (firstString.length > secondString.length) {
//         return 'first';
//     }
//     if (firstString.length < secondString.length){
//         return 'second';
//     }
//     return 'neither'
// }
//
// console.log(whichStringIsLonger("bobby", "lou")); // returns first
// console.log(whichStringIsLonger("bob", "louise")); // returns second
// console.log(whichStringIsLonger("bob", "lou")); // returns neither
// console.log(whichStringIsLonger("bobby", 2)); // returns false
// console.log(whichStringIsLonger(1, "lou")); // returns false


// function sumOfThreeNumbers (num1, num2, num3) {
//     if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
//         return num1 + num2 +num3;
//     }
//     return false;
// }
//
// console.log(sumOfThreeNumbers(1, 2, 3)); // return 6
// console.log(sumOfThreeNumbers(-10, 2, 3)); // return -5
// console.log(sumOfThreeNumbers(1, 2, "bob")); // return false


// function convertInchesToCentimeters(value) {
//     return (value * 2.54);
// }
//
// console.log(convertInchesToCentimeters(6));



// Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature
// in this format '35, 42' (assuming low will always be the left value and high the right) and returns an object with the
//     properties 'low' and 'high' with the values of those respective properties set to the corresponding values in the input string.
//     NOTE: the values in the object should be of the number type
// Example input: '35, 42'
// Example return: {low: 35, high: 42}


// function convertLowHighToObject (lowHighString) {
//     let tempArray = lowHighString.split(', ');
//     return {low: parseInt(tempArray[0]), high: parseInt(tempArray[1])};
//
// }
//
// console.log(convertLowHighToObject('35, 42'));




// let cheatArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
// let inArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
//
// console.log(cheatArray);
// console.log(inArray);
// if (cheatArray === inArray)
//     console.log('yeet')


// console.log(Math.sin(200000) - .9);

// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);

// if (true) {
//     let x = 5;
// }
// console.log(typeof x);

// const sayHello = (name) => {`Hello, ${name}!`}

// Write a function called countDuplicates that takes in a string and returns an object that contains the count for
//     each letter within the given string.
//     ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
// returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 }
// console.log(countDuplicates("adsjfdsfsfjsdjfhacabcsbajda"));

// function countDuplicates (aString) {
//     let tempArray = [];
//
//     for (let i = 0; i < aString.length; i++) {
//         tempArray.push(aString.charAt(i));
//     }
//     return tempArray.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
// }

// function countDuplicates(aString) {
//     let letterCountObj = {};
//     let count = 1;
//
//     for (let i = 0; i < aString.length; i++) {
//         if (!(aString[i] in letterCountObj)){
//             letterCountObj[aString[i]] = count;
//         }
//         else letterCountObj[aString[i]] = letterCountObj[aString[i]] + count
//     }
//     return letterCountObj;
// }


// Write a function called makePerson. It takes 2 arguments: personName and age.
//     personName must be at least 1 character long. age must be between 1 and 150.
// If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
//     If both parameters are valid, return an object containing personName and age.
//     E.g.,
//     console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
// console.log(makePerson("", 30));
// // outputs:
// Person name cannot be blank
// false

// function makePerson(personName, age) {
//     if ((0 < age && age < 150) && personName.length >= 1){
//         return {personName, age};
//     }
//     console.log("input invalid");
//     return false;
// }
//
// console.log(makePerson("will", 24));

// function isOdd (x) {
//     x = Math.abs(x)
//     return x % 2 === 1;
// }
//
// function isOddv2 (x) {
//     return Math.abs(x) % 2 === 1;
// }
//
// function isOddv3 (x) {
//     return (x % 2 === 1) || (x %  2 === -1);
// }
//
// function isOddv4 (x) {
//     return x % 2 !== 0;
// }
// function isOddv2 (x) {
//     if (x % 2 === 1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(-3 % 2);
// console.log(isOdd(-3))
// console.log(isOddv2(-3))
// console.log(isOddv3(-1))
// console.log(isOddv4(-3))

