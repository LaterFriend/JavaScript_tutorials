//Try ... catch ... finally
// 2 typy chyb v kódu
    // Syntax Error - chyba v syntaxy, špatně napsaný kód
    // Runtime Error - chyba, která nastane při exekuci programu, např. NULL vstupující do funkce, iniciování před definováním apod.
// Runtime Errors nazýváme exceptions

//try...catch - pro exceptions handling
// try block - slouží pro main kód, pokud se zde vyskytne exception - spustí se catch blok
// catch block - stará se o vyskytnuté exceptions 
// pokud se při spouštění try bloku nic nestane - catch blok se přeskočí

const numerator = 100, denominator = "a";
try {
    console.log(numerator/denominator); //NaN
    console.log(a); //exception - proměnná "a" není definována -> provede se catch blok

} catch (error) { // jako argument vstupuje chybová zpráva erroru, který nastal v try bloku
    console.log("An error caught");
    console.log(`Error message: ${error}`);
}

//try ... catch ... finally
// finally - blok, který se spustí ať už nastala v bloku try chyba nebo ne
try {
    console.log(numerator/denominator);
    console.log(a);
} catch(error) {
    console.log("An error caught");
    console.log(`Error message: ${error}`);
} finally {
    console.log("Finally will execute every time");
}
// Pokud použijeme try blok - musíme vytvořit i catch nebo finally blok - jinak error

//try...catch in setTimeout
// try...catch nechytí exception pokud nastane v "timed" kódu - např. setTimeout()
    // engine už opustí try..catch statement a chybná funkce je spuštěna až po timeoutu
try {
    setTimeout(function() {
        //error in the code
        //console.log(a);
        console.log(denominator);
    },0);
} catch (e) {
    console.log("wont work");
}

// pro chycení musí být try..catch v callback funkci uvnitř timed funkce
setTimeout(function() {
    try {
        console.log(a);
    } catch(e) {
        console.log("chyba : " + e);
    }
},0);

//JS throw statement
    // pomocí throw můžeme definovat své vlastní exceptions
    // try ... catch ... throw
    // když je blok throw vykonán - program jde do catch bloku - kód pod throw statementem není vykonán
const number = 15;
try {
    if(number > 50) {
        console.log("Success");
    } else {
        throw new Error("The number is low"); // vytvoření vlastního Erroru
    }
    console.log("hello"); // tento kód se nespustí pokud bude throw blok proveden
} catch(error) { // jako argument se předá námi vytvořený Error
    console.log("An Error caught");
    console.log("Error message: " + error);
}

// Pro vytvoření Erroru můžeme použít i jiné Error constructory : TypeError, SyntaxError, ReferenceError, EvalError, InternalError, and RangeError

//Rethrow an exception
    // můžeme použít throw uvnitř catch bloku pro rethrow chyby

const num = 1;
try {
    throw new Error("This is the throw");
} catch(error) {
    console.log("An error caught");
    if (num + 8 > 10) {
        // statements k vyřešení chyby
        console.log("Error message: " + error);
        console.log("Error resolved");
    } else {
        // nepodařilo se nám ošetřit / vyřešit chybu
        throw new Error("The value is low"); // Vyvoláme chybu znova a tentokrát ji neošetříme - program skončí a spadne na : Uncaught Error: The value is low
    }
}