var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
//a=1, b=1, c=3

var d = "hello";//NaN
var e = false;//1

d++;
e++;

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;//undefined

var price = 2.7;
price.toFixed(2);//2.70

isNaN(0)//false

isNaN(1)//false

isNaN("")//false

isNaN("string")//true

isNaN("0")//false

isNaN("1")//false

isNaN("3.145")//false

isNaN(Number.MAX_VALUE)//false

isNaN(Infinity)//false

isNaN("true")//true

isNaN(true)//false

isNaN("false")//true

isNaN(false)//false

// to illustrate why the isNaN() function is needed:
NaN == NaN


!true//false

!false//true

!!true//true

!!false//false

!!0//false

!!-0//false

!!1//true

!!-1//true

!!0.1//true

!!"hello"//true

!!""//true

!!''//false

!!"false"//true

!!"0"//true



var sample = "Hello Codeup";

console.log(sample.length);
console.log(sample.toLowerCase());
console.log(sample.concat(" Students."));
console.log(sample.concat(" Class"));
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substr(6,11));

var movieCount = 3;
var daysRented = 9;

console.log("Your total is " + (movieCount*daysRented));

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

console.log("Your total pay is: " + ((googlePay*6) + (amazonPay*4) + (facebookPay*10)));

var username = 'codeup';
var password = 'notastrongpassword';

