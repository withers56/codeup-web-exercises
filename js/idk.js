"use strict";

function randomCardPull () {
    let cardStack = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'ace'];
    let cardSelected = [];

    cardSelected.push(cardStack[Math.floor(Math.random() * 10)]);
    console.log(cardSelected);

}

randomCardPull();