// callback
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({ // zavolá se callback funkce: errorCallback, kterému předáme jako argument object -> druhá předaná funkce
            name: "User Left",
            message: ":("
        });
    } else if (userWatchingCatMeme) {
        errorCallback({ // zavolá se callback funkce: errorCallback, kterému předáme jako argument object -> druhá předaná funkce 
            name: "User Watching Cat meme",
            message: "Me < Cat"
        });
    } else {
        callback("Thumbs up!"); // zavolá se callback funkce: callback s argumentem "Thumbs up!"-> první předaná funkce
    }
}

watchTutorialCallback((message) => {
    console.log("Success: " + message); // první předaná funkce -> callback
}, (error) => {
    console.log(error.name + " " + error.message); // druhá předaná funkce -> errorCallback
});

// To samé pomocí Promises
function watchTutorialPromise() { // funkce vracející nový promise object
    return new Promise ((resolve, reject) => {
        if (userLeft) {
            reject({ 
                name: "User Left",
                message: ":("
            });
        } else if (userWatchingCatMeme) {
            reject({ 
                name: "User Watching Cat meme",
                message: "Me < Cat"
            });
        } else {
            resolve("Thumbs up!");
        }
    })
}

watchTutorialPromise().then((message) => { // jako message parametr se bere hodnota v resolve()
    console.log("Success: " + message);
}).catch((error) => { // jako error parametr se bere hodnota v reject() 
    console.log(error.name + " " + error.message);
});

const recordVideoOne = new Promise((resolve, reject) => {
    reject("Video 1 recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 recorded");
});

Promise.all([ // předáváme array všech promisů na jejichž doběhnutí chceme počkat, pokud všechny doběhnou úspěšně -> then
// jakmile jeden doběhne neúspěšně -> catch
// .all() spustí všechny promises najednou (asynchronně ofc) a čeká na doběhnutí všech
    recordVideoOne, 
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(`${message[0]} | ${message[1]} | ${message[2]}`); // parametr v .then() je array všech messages v resolve() v daných promises
}).catch((message) => { // parametr v .catch() jedna hodnota -> message z prvního promise, který doběhl neúspěšně
    console.log(message);
});

Promise.race([ //.race() spustí všechny promises najednou a čeká na doběhnutí prvního (nejrychlejšího) -> podle toho jak tento první promise skončí -> then() nebo catch()
    recordVideoOne, 
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message); 
    // parametr message je jedna hodnota -> z nejrychlejšího promise
}).catch((message) => { 
    console.log(message + " ERROR");
});
