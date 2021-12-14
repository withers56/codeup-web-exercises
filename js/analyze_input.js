


// here is a conditionals project for those who are done with
//     the exercises:
//     Create a file named analyze_input.js in the js directory.
//     In that file, write a program that receives user input
// and analyzes the input differently whether if the input is
// a number or a string. If the input is a string, it will
// analyze the string differently if it is length 1.
// Following are the rules of analysis:
//     If the input is a number:
//     Output if the number is odd or even (zero is considered
// even). Use your function from Exercise 2 for this
//     functionality.
//     Output if the number is negative, positive, or zero
// If the input is a string:
//     If the string’s length is 1, output if the string
// (or char) is a vowel or not
// Otherwise, output the length of the string
// Design your program to include a switch and at least one
//     if/else. You must also make separate functions for all
//         of the following program functionality:
//     Determining if the input is a number, string, or
//     otherwise. This function should be called analyzeInput
//     Determining if a number is odd or even. Re-use your
//     Exercise 2 function for this.
//                                                                                     Determining if a number is <, >, or equal to zero
//     Determining if the string is a single character or not
//     Determining if the length 1 string is a vowel or not
//     Add, commit, and push to GitHub.

// inputAnalasis("1");
function inputAnalasis(input) {


    switch (isNaN(input)) {

        case true : {
            console.log('is not number');
            break;
        }
        case false : {
            console.log('is num');
            break;
        }
        default : {
            console.log("idk");
        }


    }
}

function oddOrEven (num) {
    if (num % 2 === 0){
        console.log("Your number " + num + " is even.");
    } else if (num % 2 !== 0) {
        console.log("Your number " + num + " is odd.");
    } else console.log("error");
}
    // oddOrEven()

function positiveOrNegative(num) {
    if (num > 0) {
        console.log("Your number " + num + " is positive.")
    } else if (num < 0) {
        console.log("Your number " + num + " is negative.")
    } else if (num === 0) {
        console.log("Your number is 0.")
    }else console.log("error");
}
// positiveOrNegative("test")

function isSingleChar(string) {
    if (string.length === 1) {
        console.log(string + " is a single character")
    } else if (string.length > 1) {
        console.log(string + " is not a single character")
    }else console.log("error");
}

isSingleChar(1)





