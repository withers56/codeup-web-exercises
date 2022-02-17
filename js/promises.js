"use strict";

getUserInfo('withers56')

function getUserInfo(username) {
    fetch(`https://api.github.com/users/${username}/events`).then((result) => {
        return result.json();
    }).then((jsonData) =>{
        console.log(jsonData);
    });
}
