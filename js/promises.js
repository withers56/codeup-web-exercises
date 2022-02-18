(async function (){
    "use strict";



    // console.log(await getUserLastestPushDate('withers56'))
    console.log(await getUserCommit(await getUserLastestPushDate('withers56')));

    function getUserLastestPushDate(username) {
        return fetch(`https://api.github.com/users/${username}/events`).then((result) => {
            return result.json();
        }).then((jsonData) =>{
            console.log(`Date commit pushed: ${jsonData[0].created_at}`)
            return jsonData[0].repo.url;
        });
    }



    function getUserCommit(url, username, repo) {
        return fetch(`${url}/commits`).then((result) => {
            return result.json();
        }).then((jsonData) =>{
            console.log(`Author of commit: ${jsonData[0].committer.login}`)
            return `Commit message: ${jsonData[0].commit.message}`;
        });
    }

    console.log(await wait(1000));
    console.log(await wait(3000))

    function wait(time){
         const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let seconds = time / 1000;
                resolve("you will see this after " + seconds + " seconds");
            }, time);
        });
         return myPromise;
    }
})();