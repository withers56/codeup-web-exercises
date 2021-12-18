oddNumBetween1And50();

function oddNumBetween1And50(){
    let userOddNum = prompt("Please enter a odd number between 1 and 50.");

    while (true) {
        if (userOddNum % 2 === 1){
            break;
        }else  userOddNum = prompt("That was not an odd number!, try again.");

    }

    alert("Valid");
}