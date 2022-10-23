// Promise and Promise Chaining
// Promise se používá ke zjištění, zda byla asynchronní operace úspěšně dokončena
// Promise může mít jeden ze 3 stavů:
    // Pending
    // Fulfilled
    // Rejected
// Promise začíná ve stavu Pending - to znamená, že sledovaný asynchronní proces ještě není dokončen
// Pokud je sledovaný proces úspěšně dokončen -> promise nabyde Fulfilled stavu
// Pokud se při provádění sledovaného procesu vyskytne chyba -> proces nabyde rejected stavu

// Např: 
// Pokud po serveru vyžadujeme data s použitím promise - budeme v pending stavu. Pokud data úspěšně dorazí -> promise se posune do fulilled stavu. 
// Pokud nastane chyba -> promise se posune do rejected stavu

// let promis = new Promise(function(resolve, reject){});
// Promise() constructor přijímá funkci jako argument -> funkce také přijímá 2 další funkce jako argumenty (resolve() a reject())
// Pokud bude promise úspěšně vyplněn (fulfilled stav) -> je zavolána resolve() funkce
// Pokud se vyskytne error při provádění promise -> je zavolána reject() funkce

const count = true;

let countValue = new Promise((resolve, reject) => { // vytváříme Promise objekt
    if (count) // promise je splněn pokud se hodnota proměnné count = true
        resolve("There is a count value");
    else 
        reject("There is no count value");
});
console.log(countValue);
console.log(typeof(countValue));

//Promise Chaining
// Jaké operace provedeme po dokončení promise určujeme pomocí : then(), catch(), finally()

// Metoda then()
// Metoda then() je použita s callback funkcí, když je promise úspěšně splněn (fulfilled stav)
// promiseObject.then(onFulfilled, onRejected);

// vrací promise
let countValue2 = new Promise(function(resolve, reject){
    resolve("Promise resolved"); // tento výsledek se použije v metodě then() jako argument "result"
});

// provede se tehdy, když je promise úspěšně splněn
countValue2
    .then(function succesValue(result) {
        console.log(result);
    })
    .then(function succesValue1() {
        console.log("Takto můžeme zavolat více funkcí");
    })
    .then(function succesValue2() {
        console.log("Další funkce");
    });

// metodu then() používáme ke zřetězení funkcí
// Metoda then() je volána při úspěšném vyřešení promisu
// metod můžeme zřetězit více


//Metoda catch()
// Metoda catch() je použita s callback funkcí, když promise skončí neúspěchem (rejected stav)

// vraci promise
let countValue3 = new Promise(function(resolve,reject){
    reject("Promise Rejected!!");
});
// spustí se pouze pokud promise skončí úspěšně:
countValue3.then(function successValue(result) {
    console.log(result);
    },
)
// spustí se pouze tehdy, kdy se nepodaří promise dokončit - promise skončí neúspěchem
.catch(function errorValue(result){
        console.log(result);
    }
);

// Promise vs Callback - oba můžou být použity ke zpracování asynchronních operací
// Callback funkce jsou také používány u synchronních operací

// Promise - user-friendly syntax + easy-to-read + error handling je lehčí
/*

api().then(function(result) {
    return api2() ;
}).then(function(result2) {
    return api3();
}).then(function(result3) {
    // do work
}).catch(function(error) {
    //handle any error that may occur before this point 
});

*/

// Callback - složitá syntaxe na pochopení + složitý error handling

// Metoda finally()
// metoda finally() se vykoná v obou případných koncích promisu
let cntValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved-4");
    }
);

cntValue.finally(function greet() {
    console.log("This code is executed.");
    }
);

// Promise metody
// all(iterable)	    Waits for all promises to be resolved or any one to be rejected
// allSettled(iterable)	Waits until all promises are either resolved or rejected
// any(iterable)	    Returns the promise value as soon as any one of the promises is fulfilled
// race(iterable)	    Wait until any of the promises is resolved or rejected
// reject(reason)	    Returns a new Promise object that is rejected for the given reason
// resolve(value)	    Returns a new Promise object that is resolved with the given value
// catch()	            Appends the rejection handler callback
// then()	            Appends the resolved handler callback
// finally()	        Appends a handler to the promise