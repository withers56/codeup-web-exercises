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
console.log(sample.toUpperCase());
console.log(sample.concat(" Students."));
console.log(sample.concat(" Class"));
console.log(sample.indexOf("c"));// -1, there is no lowercase c. could negate
//by chaning it all to lowercase before running indexOf.
console.log(sample.indexOf("C"));
console.log(sample.substr(6,11));

var movieCount = 3;
var daysRented = 9;

console.log("Your total is: $" + (movieCount*daysRented));

let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;


console.log("Your total pay from google is: $" + ((googlePay*6) +
    "\nYour total pay from amazon is: $" + (amazonPay*4) + "\nYour total pay from facebook is: $" +(facebookPay*10)));
console.log("All together the total is: $" + ((googlePay*6) + (amazonPay*4) + (facebookPay*10)));

//A student can be enrolled in a class only if the class is not full and the
//class schedule does not conflict with her current schedule.

let classCapacity = 11;
let classMaxCapacity = 25;
let scheduleConflict = false;

if ((classCapacity < classMaxCapacity) && (scheduleConflict == false))
{
    console.log("The student is cleared for class.");
}
    else console.log("The student is not cleared for class.");

///////////////////////////////////////////////////////////////////////////

//A product offer can be applied only if a person buys more than 2 items, and
// the offer has not expired. Premium members do not need to buy a
// specific amount of products.

let offerExpire = true;
let itemAmount = 3;
let premiumMemberStatus = false;

if ((premiumMemberStatus == true) && (offerExpire == false))
{
    console.log("Customer will recieve a discount.")
}
    else if ((itemAmount > 2) && (offerExpire == false))
{
    console.log("Customer will recieve a discount.");
}
    else console.log("No discount available");


// Create a variable that holds a boolean value for each of the following
// conditions:

// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

var username = 'codeup';
var password = 'notastrongpassword';
var booleanPassLength;
var booleanVarInclude;
var booleanVarLength;
var booleanVarWhiteSpace;

if ((password.length +1) >= 5)
{
    booleanPassLength = true;
    console.log("Success")
}
    else {
    console.log("The password is not atleast 5 characters.")
        booleanPassLength = false;
}

    if ((password.includes(username))== true)
    {
        booleanVarInclude =  false;
        console.log("The username cannot be in the password")
    }
    else {
        booleanVarInclude = true;
        console.log("Success")
    }

if ((username.length + 1) > 20)
{
    console.log("The username must be less than 20 characters.");
    booleanVarLength = false;
}
else
{
    console.log("Success");
    booleanVarLength = true;
}

if ((username.includes(" ")) || (password.includes(" ")))
{
    console.log("The username or password cannot contain whitespace");
    booleanVarWhiteSpace = false;
}
else
{
    console.log("Success");
    booleanVarWhiteSpace = true;
}




if((booleanVarInclude && booleanVarLength && booleanVarWhiteSpace &&
    booleanPassLength) == true)
{
     console.log("You're all set");
}
else console.log("something is wrong yo");



////////////////////////////////////////////////////////////////////////////









