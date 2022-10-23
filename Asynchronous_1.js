// setTimeout()
// metoda, která provede blok kódu po uplynutí časového intervalu
// provede kód pouze jednou
// setTimeout(function, milliseconds);

function greet() {
    console.log("Hello world");
}
setTimeout(greet, 1000);
console.log("Tato zpráva se zobrazí dříve!");

// setTimeout() vrací interval ID
function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    setTimeout(showTime, 3000); // každé 3 vteřiny se funkce zavolá sama znovu -> program nikdy nepřestane běžet
}

// showTime();

// clearTimeout() method -> zastavení timeoutu po zavolání setTimeout() metody
let count = 0;

function incCount(){
    count++;
    console.log(count);
}
let id = setTimeout(incCount, 3000); // do proměnné "id" ukládáme interval ID -> které vrací setTimeout metoda 
clearTimeout(id); // zde ukončujeme tento proces pomocí zastavení daného interval ID
console.log("setTimeout is stopped");
// Metoda clearTimeout() se obvykle používá, když potřebujeme zrušit volání metody setTimeout() dříve, než k tomu dojde

// Metoda setTimeout() přijímá argumenty, které předává volané funkci
function gr(name, lastname){
    console.log(`Hello ${name} ${lastname}`);
}
setTimeout(gr,1000,"John","Doe");