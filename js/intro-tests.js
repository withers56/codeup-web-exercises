function count(input) {
    if(typeof input === "string"){
        return input.length;
    } else return false;
}

console.log(count("test"));

function testCount() {
    let actualOutput = count("test")
    let expectedOutput = 4;
    console.log("test passed for string input: " + (actualOutput === expectedOutput));

    actualOutput = count(1);
    expectedOutput = false;
    console.log("test passed for number input: " + (actualOutput === expectedOutput));

    actualOutput = count(true);
    expectedOutput = false;
    console.log("test passed for boolean input: " + (actualOutput === expectedOutput));

    actualOutput = count(undefined);
    expectedOutput = false;
    console.log("test passed for undefined input: " + (actualOutput === expectedOutput));

    actualOutput = count(null);
    expectedOutput = false;
    console.log("test passed for null input: " + (actualOutput === expectedOutput));

}

//testCount("test");