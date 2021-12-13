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
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//     Make a function named trim(string) that removes empty spaces before and after the input.
//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//     Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.