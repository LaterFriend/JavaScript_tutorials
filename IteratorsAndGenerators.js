/* Iterator 
    - Je objekt, který definuje sekvenci a potenciálně návratovou hodnotu při jejím ukončení
    - Každý objekt, který implementuje "Iterator protocol" - tím že má metodu next(), která vrací objekt se dvěmi vlastnostmi
        1. Vlastnost : Value = další hodnota v iteration sekvenci
        2. Vlastnost : Done = nabývá hodnoty true, pokud byla vyčerpána poslední hodnota v sekvenci.
        Pokud je vedle hodnoty Done vrácena i value -> Právě Value je návratová hodnota iteratoru
    
    - Po vytvoření může být Iterator objekt explicitně iterován opakovaným voláním next()
        - Říká se, že iterace přes Iterator spotřebovává Iterator, protože je obecně možné provést tento průchod pouze jednou
        - Po yieldingu konečné hodnoty další volání next() nadále vrací {done: true} (již nevrací Value)
    
    - Nejběžnějším Iteratorem v JS je Array Iterator, který vrací postupně v sekvenci každou hodnotu v daném Array
    - Iterators můžou být nekonečné sekvence (např. Range od 0 do nekonečna)
    - Iterator konzumujeme pouze pokud je potřeba 

*/
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = { // tvorba rangeIterator objektu
        next() { // vytváříme metodu next()
            let result;
            if (nextIndex < end) {
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iterationCount++;
                return result; 
                // pokud je aktuální hodnota indexu < hodnota end indexu -> vracíme objekt, kde value = aktuální index, done : false - ukončení provádění metody next()
            }
            return {value: iterationCount, done: true}; 
            // pokud je aktuální hodnota indexu >= hodnota end indexu -> vracíme objekt, kde value = počet iterací, done : true - ukončení provádění metody next()
        }
    };

    return rangeIterator; // funkce vrací objekt
}

const it = makeRangeIterator(1,10,2); // jelikož funkce vrací Iterator objekt, proměnná "it" je nyní typu object
console.log(typeof(it)); 

let result = it.next(); // do resultu ukládáme objekt (value: , done: ), který metoda next() vrací
while (!result.done) { // dokud je done: false
    console.log(result.value);
    result = it.next();
}
// Všechny hodnoty v sekvenci jsme nyní zkonzumovali - do result.value ukládáme počet provedených iterací

console.log("Iterated over sequence of size: ", result.value);


/* Generator funkce
- Umožňují definovat iterativní algoritmus napsáním jediné funkce, jejíž provádění není spojité
- Generator funkce se zapisují pomocí syntaxe "function*"
- Při volání generator funkce - funkce zpočátku nespustí svůj kód
    - Místo toho vrátí speciální Iterator typ nazývaný Generátor
    - Když je hodnota konzumována voláním metody generátoru next() -> funkce generátoru běží dokud nenarazí na keyword yield
- Funkce může být volána tolikrát, kolikrát je požadováno, a pokaždé vrátí nový generátor. 
    - Přes každý generátor může být iterováno pouze jednou
*/

function* makeRangeIterator_2(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step){
        iterationCount++
        yield i; // zde se ukončí jednotlivá volání metody next() 
    }
    return iterationCount; // dokončení generátoru
}
const newGenerator = makeRangeIterator_2(1,25,3); // funkce vrací Generator Object
console.log(typeof(newGenerator));  // generator je speciální typ objektu

let result2 = newGenerator.next(); 
// v prvním volání next metody se provede tělo generátoru až po první yield statement - deklaruje se a vytvoří proměnná iterationCount např.
while (!result2.done) { 
    console.log(result2.value);
    result2 = newGenerator.next(); 
    // při každém dalším volání metody next() se provede tělo generátoru až po další statement yield - např. se zvýší hodnota proměnné iterationCount
}
console.log("Iterated over sequence of size: ", result2.value);

// tento kód funguje velmi podobně jako kód výše. Je ovšem přehlednější.