// Make a function named isOdd(number)

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    } else return false;
}

// console.log(isOdd(4))

// Make a function named isEven(number)

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else return false;
}

// console.log(isEven(1));

// Make a function named identity(input) that returns the input exactly as provided.

function identity(input){
    return input;
}

//console.log(identity(1));

//     Make a function named isFive(input)

function isFive(input){
    if (input == 5) {
        return true;
    }else return false;
}

//console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return (input + 5);
}

//console.log(addFive(5));

//     Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
    if (input % 5 === 0) {
        return true;
    }else return false;
}

//console.log(isMultipleOfFive(25));

// Make a function named isThree(input)

function isThree(input) {
    if (input === 3) return true;
    else return false;
}

// console.log(isThree(2));

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input) {
    if (input % 3 === 0) {
        return true;
    }else return false;
}

// console.log(isMultipleOfThree(9));

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(input) {
    if (input % 3 === 0 && input % 5 === 0) return true;
    else return false;
}


// console.log(isMultipleOfThreeAndFive(30));
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n){
    if ( (target % n) === 0) return  true;
    else return false;
}

// console.log(isMultipleOf(20,10));

// Make a function named isTrue(boolean)
function isTrue(boolean) {
    return true;
}
// Make a function named isFalse(boolean)
function isFalse(boolean) {
    return false;
}
// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input) {
    if(input) return true;
    else return false;
}
// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {
    if (!input) return true;
    else return false;
}
// Make a function named isVowel(letter)
function isVowel(letter) {
    letter = letter.toLowerCase();
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
        return true;
    else return false;
}

// console.log(isVowel('A'))

// Make a function named isConsonant(letter)
function isConsonant(letter) {
    letter = letter.toLowerCase();
    if (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u')
        return true;
    else return false;
}

// console.log(isConsonant('Q'));

// Make a function named isCapital(letter)
function isCapital(letter) {
    if (letter === letter.toUpperCase())return true;
    else return false;
}
// Make a function named isLowerCase(letter)
function isLowerCase(letter) {
    if (letter === letter.toLowerCase()) return true;
    else return false;
}
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase(string) {
    return string.toLowerCase() === string;
}

// console.log(hasLowerCase("test"));

// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {
    return letter === " ";
}

// console.log(isSpace(" "));
//
// Make a function named isZero(number)
function isSpace(number) {
    return number === 0;
}

// console.log(isSpace(0));

// Make a function named notZero(input) that returns true if the input is not zero
function notZero(number) {
    return number !== 0;
}

// console.log(notZero(4));

// Write a function named lowerCase(string)
function lowerCase(string) {
    return string.toLowerCase();
}
// Write a function named double(n) that returns a number times two
function double(n) {
    return n * 2;
}
// Write a function named triple(n) that returns a number times 3
function triple(n) {
    return n * 3;
}
// Write a function named quadruple(n) that returns a number times 4
function quadruple(n) {
    return n * 4;
}
// Write a function named half(n) that returns 1/2 of the provided input
function half(n) {
    return n / 2;
}
// Write a function named subtract(a, b) that returns a minus b
function subtract(a ,b) {
    return a - b;
}
// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b) {
    return a * b;
}
// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    return a / b;
}
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b) {
    return a % b;
}

// console.log(remainder(17, 9))
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b

// Write a function named cube(n) that returns n * n * n
function cube(n) {
    return n * n * n;
}
// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n) {
    return Math.sqrt(n);
}
// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n) {
    return Math.cbrt(n);
}
// Write a function named invertSign(number) that returns a negative
// version of a postive number, a positve version of negative, and
// false for all else.
function invertSign(number) {
    if (isNaN(number)){
        return false;
    }else return number * (-1);
}

// console.log(invertSign(-1));
// Write a function named degreesToRadians(number)
function degreesToRadians(number){
    return number * (Math.PI/180);
}

// console.log(degreesToRadians(360))
// Write a function named radiansToDegrees(number)
function radiansToDegrees(number) {
    return (180 * number) / Math.PI;
}

// console.log(radiansToDegrees(6.2831));
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank(input){
    return /\s/g.test(input);
}

// console.log(isBlank("\n"))
//     Make a function named trim(string) that removes empty spaces before and after the input.
function trim(string) {
    return string.trim();
}

// console.log(trim("   test    "))
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function areEqual(input1, input2) {
    return input1 == input2;
}
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
function areIdentical(input1, input2) {
    return input1 === input2;
}
//     Make a function named not(input) returns the input with a flipped boolean
function not(input){
    return !input;
}

// console.log(not(false))
// Make a function named notNot(input) that the negation of the negation of the input.
function notNot(input) {
    return !!input;
}
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

// console.log(and(5, 5))
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}
// Write a function called reverseString(string) that reverses a string
function reverseString(string) {
    return string.split( '' ).reverse( ).join( '' );
}

// console.log(reverseString(""))
// Make a function named absoluteValue(number) that returns the absolute value of a number.
function absoluteValue(number) {
    return Math.abs(number);
}
//     Make a function named rollDice(sides) that takes in an argument containing
//     the number of sides the die should have. Generate a random number between
//     1 up to and including the number of sides.
function rollDice(sides) {
     return Math.floor(Math.random() * sides) + 1;
}

// console.log(rollDice(6));



// Write a function called identity(input) that takes in an argument called input and returns that input.
function identity(input) {
    return input;
}
//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(getRandomNumber(1,99))
// Write a function called first(input) that returns the first character in the provided string.
function first(input) {
    return input.charAt(0);
}

// console.log(first("test"))
//     Write a function called last(input) that returns the last character of a string
function last(input) {
    return input.charAt((input.length - 1));
}

// console.log(last("testsdhusdufwdkchbswbch"))
// Write a function called rest(input) that returns everything but the first character of a string.
function rest(input) {
    return input.substr(1);
}

// console.log(rest('this is a test'))
//     Write a function called reverse(input) that takes a string and returns it reversed.
function reverse(input) {
    return input.split( '' ).reverse( ).join( '' );
}
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
function isNumeric(input) {
    return !isNaN(input);
}

// console.log(isNumeric(1));
//     Write a function called count(input) that takes in a string and returns the number of characters.
function count(input) {
    return input.length;
}

// console.log(count('test'))
//     Write a function called add(a, b) that returns the sum of a and b
function add(a, b) {
    return a + b;
}
// Write a function called subtract(a, b) that return the difference between the two inputs.
function subtract(a, b) {
    return a - b;
}
//     Write multiply(a, b) function that returns the product
function multiply(a, b) {
    return a * b;
}
// Write a divide(numerator, denominator) function that returns a divided by b
function divide(a, b){
    return a / b;
}
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
function remainder(a, b) {
    return a % b;
}
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
function square(a) {
    return a * a;
}
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
function sumOfSquares(a, b) {
    return add(square(a), square(b));
}

// console.log(sumOfSquares(2,2));
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b){
    switch (operator){

        case "add" : return a + b;
        case "subtract" : return a - b;
        case "multiply" : return a * b;
        case "divide" : return a / b;
    }
}

console.log(doMath("add", 2, 98));
// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
function whiteSpaces(string){
    let array = string.match(/ /g)
    return array.length;
}

// console.log(whiteSpaces("test"))
//
//     Create a function that takes in two string inputs.
function stringStuff(string1, string2) {
    if (string1.includes(string2)){
        return true;
    }
}

console.log(stringStuff("this is a test", "this is a test"));
//     If the second string input is present in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.