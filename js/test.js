function add(num1 ,num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    return num1 + num2; // 10 + "22.3" -> string value "1022.3"
}


function addTests() {

    // add() returns the accurate sum of parameters
    let actualValue = add(10, 22.3);
    let experctedValue = 32.3;
    console.log("Expect the return value to be accurate: " + (actualValue === experctedValue));

    // add() can handle the parameters being a numeric string
    actualValue = add(10, "57.9");
    experctedValue = 67.9;
    console.log("expect to numeric string as a number: " + (actualValue === experctedValue));

    // add() can handle the param being a non numeric string
    actualValue = add(3, "dog");
    console.log("expect to return NaN when passed a non-numeric string: " + isNaN(actualValue));




}

addTests();