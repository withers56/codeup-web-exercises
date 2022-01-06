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

// printCar(cars[0]);
printCar(cars[0]);

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
    imdbRating : "8.8 / 10",
    academyAwardWin : false,
    genres : ["Action", "Adventure", "Fantasy"]
};
movie[1] = {
    title : "Forrest Gump",
    year : 1994,
    rating : "PG-13",
    director : {
        firstName : "Robert",
        lastName : "Zemeckis"
    },
    imdbRating : "8.8 / 10",
    academyAwardWin : true,
    genres : ["Drama", "Romance"]
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

// printAllMovies(movie);

// *** Continuing MINI EXERCISE until lunch ***
// Change the director member of your movies to an object
// with firstName and lastName members
// Make an array member for your movies called genres.
//     It is an array of string elements where each element
// is one of your movies’ genres from imdb.com
// and change your printMovie function


