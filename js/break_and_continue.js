//oddNumBetween1And50();

function oddNumBetween1And50(){
    let userOddNum = prompt("Please enter a odd number between 1 and 50.");

    while (true) {
        if (userOddNum % 2 === 1){
            break;
        }else  userOddNum = prompt("That was not an odd number!, try again.");

    }

    alert("Valid");
}
uglyNumber();
function uglyNumber(){
    let userNum = 27;
    console.log("Number to skip: " + userNum);
    for (i = 1; i <= 50; i++) {
        if (userNum === i) {
            console.log(userNum + " Yikes! thats an ugly number");
            continue;
        }
        if (i % 2 !== 0){
            console.log("Here is an odd number: " + i);
        }
    }
}