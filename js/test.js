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

// addTests();

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0);

console.log(totalSales)

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'));