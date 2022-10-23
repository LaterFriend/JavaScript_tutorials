// CallBack Function
// V JS můžeme předat funkci jako argument jiné funkci
// Tato funkce, která je předaná jako argument jiné funkci je nazývána callback funkce
function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}
//callback funkce
function callme() {
    console.log("Já jsem callback funkce");
}
// předání funkce jako argument
greet("Peter", callme);

// Benefity Callback funkce
// Můžeme počkat na výsledky předchozího volání funkce a ihned poté zavolat jinou funkci
// Vykonáme danou funkci až poté co získáme výsledky z té první 

// Program, který ukazuje delay v provedení kódu
function gr() {
    console.log("Hello world!");
}
function sayName(name){
    console.log("Hello " + name);
}
setTimeout(gr, 2000);
sayName("John");

// sayName funkce se zavolá dříve než funkce gr (kvůli setTimeout)
// Tento kód je prováděn asynchronně -> druhá funkce sayName() nečeká na zavolání první funkce gr

// Pokud chceme počkat na zavolání a výsledek z první funkce -> použijeme v tomto případě callback funkci
function gr2(name, myFunc) {
    console.log("Hello World!");
    // call back funkce -> provede se až při zavolání gr2 funkce
    myFunc(name);
}
function sayName(name){
    console.log("Hello " + name);
}
setTimeout(gr2,2000,"John",sayName); 
// Tento kód je proveden synchronně, sayName() funkce čeká na zavolání gr2() funkce

// Callback funkce je užitečná, když musíme čekat na výsledek, který vyžaduje čas. 
// Například data přicházející ze serveru, protože doručení dat nějakou dobu trvá.