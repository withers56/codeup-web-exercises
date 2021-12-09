console.log("Hello, sweet asteroid!");

//string, number, (bigint), boolean, undefined, null, object

console.log("Hello, this " + "isn't a world");

var string1 = "fresh ";
var favoriteFood = "pizza";

console.log("One of my favorite foods is " + favoriteFood + " because " + string1 +
"melted " + "cheese " + "is the best!\n");

favoriteFood = "\tenchiladas";
string1 = "\tjust \n\t\t\tkidding, \n\t\ti \nNEED \n";

console.log( string1 + favoriteFood );

console.log("\t\t         .,\n" +
    "\t\t .      _,'f----.._\n" +
    "\t\t |\\ ,-'\"/  |     ,'\n" +
    "\t\t |,_  ,--.      /\n" +
    "\t\t /,-. ,'`.     (_\n" +
    "\t\t f  o|  o|__     \"`-.\n" +
    "\t\t ,-._.,--'_ `.   _.,-`\n" +
    "\t\t `\"' ___.,'` j,-'\n" +
    "\t\t   `-.__.,--'")

//string1 = string1.toUpperCase();//returns a new string, upper-cased,donest alter string1 value
//console.log(string1);

//let subPhrase = string1.substr(15, 20);

//console.log('_' + subPhrase.charAt(subPhrase.length - 1) + '_');

let greeting = "Hello, ";

console.log(greeting);

greeting += "Willard";// new string "Hello, Willard"

console.log(greeting);

greeting += "...";// new string "Hello, Willard..."

console.log(greeting);

let num1 = 12; // number
let numStr = "jim-bob"; // string
let myBoo = true;

numStr += myBoo;

console.log(numStr);
