(async function (){
    "use strict";



    console.log(await getUserLastestPushDate('withers56'))
    // console.log(await getUserCommit(await getUserLastestPushDate('withers56')));

    function getUserLastestPushDate(username) {
        return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': GIT_HUB_API_KEY}}).then((result) => {
            return result.json();
        }).then((jsonData) =>{
            for (const event of jsonData) {
                if (event.type === "PushEvent"){
                    return event.created_at;
                }
            }
            return jsonData[0].repo.url;
        });
    }



    // function getUserCommit(url, username, repo) {
    //     return fetch(`${url}/commits`, {headers: {'Authorization': GIT_HUB_API_KEY}}).then((result) => {
    //         return result.json();
    //     }).then((jsonData) =>{
    //         console.log(`Author of commit: ${jsonData[0].committer.login}`)
    //         return `Commit message: ${jsonData[0].commit.message}`;
    //     });
    // }

    wait(1000).then(() => console.log("You will see this after 1 second"))
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