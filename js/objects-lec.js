"use strict";

let carMakes = ["Ford", "Toyota"];
let carModels = ["Taurus", "Tundra"]; // not this



// let car1 = {};
// car1.make = 'Ford';// make = property, attribute, member variable
// car1.model = 'Taurus';
// car1.year = 2000;
//
// console.log(car1);
//
// let car2 = {
//     make : 'Toyota',
//     model : 'Tundra',
//     year : 2007
// };
//
// console.log(car2);



function printCar (car) {
    console.log("Vehicle Information")
    console.log("\tMake: " + car.make);
    console.log("\tModel: " + car.model);
    console.log("\tYear: " + car.year);
    console.log("\tTires: ");
    printCarTires(car);
    console.log("-------------------------")
}

function printCarTires(car) {
    let carTires = car.tires;
    if(!carTires) {
        console.log("\tNo tires have been specified");
        return;
    }
    for (let i = 0; i < car.tires.length; i++) {
        printCarTire(carTires[i]);
    }
}

function printCarTire(carTire) {
    console.log("\t\tLocation: " + carTire.location);
    console.log("\t\tBrand: " + carTire.brand);
    console.log("\t\tYear purchased: " + carTire.yearPurchased);
    console.log("\t\t-------------------")
}

// printCar(car1);
// printCar(car2);

//array of cars instead of seperate car variables

var cars = [];

cars[0] = {};
cars[0].make = 'Ford';// make = property, attribute, member variable
cars[0].model = 'Taurus';
cars[0].year = 2000;

cars[1] = {
    make : 'Toyota',
    model : 'Tundra',
    year : 2007,
    currentSpeed : 0,
    maxSpeed : 100,
    tires : [
        {
            location: "Right-front",
            brand: "Goodyear",
            yearPurchased: 2020
        },
        {
            location: "Left-front",
            brand: "Michelin",
            yearPurchased: 2010
        },

    ]
};
// cars[1].honkHorn = function () {
//     console.log("Honk! Honk!");
// }



// cars[1].honkHorn();
// printCar(cars[0]);
//printCar(cars[1]);



cars[1].accelerate = function () {
    //increase cars speed by 10
   // console.log("increase this cars speed by 10");
    if(this.currentSpeed + 10 <= this.maxSpeed) {
        this.currentSpeed += 10;
        console.log("Current speed of car is: " + this.currentSpeed);
    } else console.log("She be breaking");
}


// for (let i = 0; i < 11; i++) {
//     cars[1].accelerate();
// }






//////////////////////////////////////////////////////////////////////////////

// *** MINI EXERCISE 10 minutes ***
// Declare an array of two objects for movies
//     that have the following member values:
//     title (string)
// year released (int)
// rating (string)
// director (string)
// imdb rating (decimal)
// academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and
// prints its info.
//     call it with each of your array elements.
//     write a printMovies function that takes an array as a parameter,
//     iterates over the array, and calls printMovie on each of the array
// elements (edited)

let movie = [];

movie[0] = {
    title : "Spider Man: No Way Home",
    year : 2021,
    rating : "PG-13",
    director : {
        firstName : "Jon",
        lastName : "Watts"
    },
    imdbRating : 8.8,
    academyAwardWin : false,
    genres : ["Action", "Adventure", "Fantasy"]
};

movie[0].rate = function (rating) {
    this.myRating = rating;
}

movie[1] = {
    title : "Forrest Gump",
    year : 1994,
    rating : "PG-13",
    director : {
        firstName : "Robert",
        lastName : "Zemeckis"
    },
    imdbRating : 8.8,
    academyAwardWin : true,
    genres : ["Drama", "Romance"],
    rate : function (rating) {
        this.myRating = rating;
    }
}

function printAllMovies (movies) {
    for (let i = 0; i < movies.length; i++) {
        console.log("Movie # " + (i + 1));
        printMovie(movie[i]);
    }
}

function printMovie (movies) {

    console.log("\tTitle: " + movies.title);
    console.log("\tYear: " + movies.year);
    console.log("\tRating: " + movies.rating);
    console.log("\tMy rating: " + movies.myRating);
    console.log("\t\tDirector: ");
    printDirector(movies.director);
    console.log("\timdb rating: " + movies.imdbRating);
    console.log("\tAcademy winner: " + movies.academyAwardWin);
    console.log("\t\tGenres: ");
    printGenres(movies);
    console.log("----------------------------------")
}

function printDirector (director) {
    console.log("\t\t\tFirst name: " + director.firstName);
    console.log("\t\t\tLast name: " + director.lastName);
}

function printGenres(movie) {
    for (let i = 0; i < movie.genres.length; i++) {
        console.log("\t\t\t" + movie.genres[i]);
    }
}



// *** Continuing MINI EXERCISE until lunch ***
// Change the director member of your movies to an object
// with firstName and lastName members
// Make an array member for your movies called genres.
//     It is an array of string elements where each element
// is one of your movies’ genres from imdb.com
// and change your printMovie function

// *** last part of MINI EXERCISE ***
// Add a rate(rating) function to each of your movie objects.
//     The function takes an int parameter called rating
// Modify rate(rating) to set a myRating property on that object
// modify printMovie to display myRating for each movie

movie[0].rate(10);
movie[1].rate(9.5);

printAllMovies(movie);





/////////////////////////////////////////////////////////////////////////////

// min <= x <= max
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);
// }

// console.log(getRandomInt(-50, -.10));
// console.log(Math.random() * 10);

//1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = 10 - 1 = 9
//max - min + 1
// let oneCounter = 0;
// let twoCounter = 0;
// let threeCounter = 0;
// let fourCounter = 0;
// let fiveCounter = 0;
// let sixCounter = 0;
// let sevenCounter = 0;
// let eightCounter = 0;
// let nineCounter = 0;
// let twentyCounter = 0;
//
// for (let i = 0; i < 1000; i++) {
//     let randomNum =Math.ceil(Math.random() * (25));
//
//     switch (randomNum){
//         case 1 : {
//             oneCounter++;
//             break;
//         }
//         case 2 : {
//             twoCounter++;
//             break;
//         }
//         case 3 : {
//             threeCounter++;
//             break;
//         }
//     }
// }

// console.log(oneCounter);
// console.log(twoCounter);
// console.log(threeCounter);

//round 3.14159 -> 3.14
//3.14159 * 100 = 314.159 -> 314
// 314 / 100 = 3.14
// console.log(Math.PI);

//100th
// console.log(Math.round(Math.PI * 1000) / 1000);
//
// console.log(parseFloat(Math.PI.toFixed(3)));







