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

console.log(isMultipleOfThree(27));





