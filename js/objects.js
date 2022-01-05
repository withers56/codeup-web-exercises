(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "William",
        lastName: "Withers"
    };

    // person.firstName = "William";
    // person.lastName = "Withers";

   // console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    function sayHello(user) {
        console.log(`Hello from ${user.firstName} ${user.lastName}!`);
    }

    //sayHello(person);



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // console.log(shoppers[0]);
    // let name = shoppers[0];
    // console.log(name.name)

    function hebBill(array) {

        for (let i = 0; i <= shoppers.length -1; i++) {
            let tempPerson = shoppers[i];
            let newBill = '';
            let discount = '';

            if (tempPerson.amount >= 200) {
                discount = true;
                newBill = tempPerson.amount - (tempPerson.amount * .12);
            } else {
                discount = false;
                newBill = tempPerson.amount;
            }

            if (discount) {
                console.log(`${tempPerson.name} spent ${tempPerson.amount} at heb, they recieved a discount of 12% and the new total is ${newBill.toFixed(2)}.`);
            } else console.log(`${tempPerson.name} spent ${tempPerson.amount} at heb, they did not recieve a discount.`);


        }

    }
   // hebBill(shoppers);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: "The Catcher in the Rye",
            author: {
                firstName: "J. D",
                lastName: "Salinger"
            }
        },
        {
            title: "The Great Gatsby",
            author: {
                firstName: "Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title: "Pride and Prejudice",
            author: {
                firstName: "Jane",
                lastName: "Austen"
            }
        },
        {
            title: "The Lord of the Rings",
            author: {
                firstName: "J. R. R.",
                lastName: "Tolkien"
            }
        }
    ]

    // console.log(books[3].author.firstName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function bookInfo(array) {
        for (let i = 0; i <= array.length -1; i++) {
            console.log(`Book number: ${i + 1}`);
            console.log(`Title: ${array[i].title}`);
            console.log(`Author: ${array[i].author.firstName} ${array[i].author.lastName}`);
            console.log("---------------------------");

        }
    }
bookInfo(books);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();