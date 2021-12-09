//console.log(1 + 2);// added a number to another number
// integer, floating-point number, infinity (1/0), real/imaginary numbers

//console.log((1 + 3.14).toFixed(2));

// Parenthesis, Exponents, Multiply,Divide, Add/Subtract. PEMDAS.

// let myExpression = (10 * 2 / 5) - 2**2;
//10 * 2 = 20
//20 / 5 = 4
//2 ^ 2 = 4
// 4 - 4 = 0

// console.log((1 / myExpression)); // OOF, infinity considered a number

// binary operator
//requires TWO (binary) operands in order to evaluate
// + add
// - subtract
// * multiply
// / divide
// % modulus
// ** ^ exponential

// unary operators
// + plus
// - negate
// ++ increment
// -- decrement
// typeof
// let num1 = 22;
// console.log(num1++); // post-increment
// num1 original is output to the console, then incremented
// console.log(num1);
// console.log(++num1); // pre-increment

// num1 = num1 +1;
// num1 += 1;

// let numStr = "7.99"; // string
// let discount = .10; // number

// let numAmount = parseFloat(numStr);
// let discountedAmount = numAmount - (numAmount * discount)

// console.log(parseFloat(discountedAmount.toFixed(2)));

let userAge = "32"
let hopefullyANumber = parseInt(userAge);

//NaN is a falsey. certain values are iherintly false. NaN, null, undefined
//0, -0, ""

if(hopefullyANumber){
    console.log("your age is: " + userAge);
}else{
    console.log("that was not a valid age. try agaain dawg");
}

console.log();