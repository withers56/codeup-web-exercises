"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];





// 2

let threeLanguages = users.filter(function (user){
    if (user.languages.length >= 3)
        return user;
});

// console.log(threeLanguages)
 // 3

let userEmails = users.map(function (user){
    return user.email;
});

// 4

let userYears = users.reduce(function (totalYears, userYears){

    return totalYears + userYears.yearsOfExperience
}, 0);

let averageYearsOfExperience = userYears / users.length;

console.log(averageYearsOfExperience)

// 5

let longestEmail = users.reduce(function (longestEmail, user) {
    if (user.email.length > longestEmail.length) {
        return user.email;
    }
        else {
            return longestEmail;
        }

}, '')

console.log(longestEmail)

let userNames = users.reduce(function (nameList, userName){

    if (userName.name === users[users.length-1].name){
        nameList += userName.name + '.';
        return nameList
    }

    nameList += userName.name + ", ";

    return nameList;
}, '');

console.log('Your instructors are: ' + userNames);




let languages = users.map(function (user){
    return user.languages;
});

console.log(languages);





